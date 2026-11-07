import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { InterviewService } from '../../../core/services/interview.service';
import { ReportService } from '../../../core/services/report.service';
import { ToastService } from '../../../core/services/toast.service';
import { Interview, InterviewAnswer, InterviewQuestion } from '../../../core/models/models';
import { ScoreGaugeComponent } from '../../../shared/components/score-gauge/score-gauge.component';

@Component({
  selector: 'app-interview-session',
  standalone: true,
  imports: [CommonModule, FormsModule, ScoreGaugeComponent],
  templateUrl: './interview-session.component.html',
})
export class InterviewSessionComponent implements OnInit, OnDestroy {
  interviewId = '';
  interview = signal<Interview | null>(null);
  questions = signal<InterviewQuestion[]>([]);
  answers = signal<InterviewAnswer[]>([]);
  loading = signal(true);

  currentIndex = signal(0);
  answerText = '';
  submitting = signal(false);
  completing = signal(false);
  lastEvaluation = signal<InterviewAnswer | null>(null);

  // Timer
  elapsedSeconds = signal(0);
  private timerHandle: any;
  private questionStartedAt = 0;

  // Voice mode state
  isListening = signal(false);
  isSpeaking = signal(false);
  private recognition: SpeechRecognition | null = null;

  constructor(
    private route: ActivatedRoute,
    private interviewService: InterviewService,
    private reportService: ReportService,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    this.interviewId = this.route.snapshot.paramMap.get('id') || '';
    this.load();
    this.timerHandle = setInterval(() => this.elapsedSeconds.update((s) => s + 1), 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.timerHandle);
    this.recognition?.abort();
    speechSynthesis.cancel();
  }

  get mode(): 'text' | 'voice' {
    return this.interview()?.mode || 'text';
  }

  load() {
    // Try text endpoint first; interview mode determines which endpoint the record lives under logically,
    // but both endpoints read/write the same Interview document, so text GET works regardless of mode.
    this.interviewService.get(this.interviewId, 'text').subscribe({
      next: (res) => {
        this.interview.set(res.data.interview);
        this.questions.set(res.data.questions);
        this.answers.set(res.data.answers);
        this.questionStartedAt = Date.now();
        this.loading.set(false);
        if (this.mode === 'voice' && this.interview()?.status !== 'completed') {
          setTimeout(() => this.speakCurrentQuestion(), 400);
        }
      },
      error: () => this.loading.set(false),
    });
  }

  get currentQuestion(): InterviewQuestion | null {
    return this.questions()[this.currentIndex()] || null;
  }

  get isAnswered(): boolean {
    const q = this.currentQuestion;
    if (!q) return false;
    return this.answers().some((a) => a.question === q._id);
  }

  get answeredCount(): number {
    return this.answers().length;
  }

  formattedTime(totalSeconds: number): string {
    const m = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
    const s = Math.floor(totalSeconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  }

  // ---- Voice mode: Text-to-Speech + Speech-to-Text via the browser ----
  speakCurrentQuestion() {
    const q = this.currentQuestion;
    if (!q || !('speechSynthesis' in window)) return;
    speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(q.questionText);
    utterance.rate = 0.98;
    this.isSpeaking.set(true);
    utterance.onend = () => this.isSpeaking.set(false);
    speechSynthesis.speak(utterance);
  }

  startListening() {
    const SpeechRecognitionCtor = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
    if (!SpeechRecognitionCtor) {
      this.toast.show('Speech recognition is not supported in this browser. Try Chrome or Edge.', 'error');
      return;
    }
    this.recognition = new SpeechRecognitionCtor();
    this.recognition!.continuous = true;
    this.recognition!.interimResults = true;
    this.recognition!.lang = 'en-US';

    let finalTranscript = this.answerText ? this.answerText + ' ' : '';

    this.recognition!.onresult = (event: SpeechRecognitionEvent) => {
      let interim = '';
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const result = event.results[i];
        if (result.isFinal) finalTranscript += result[0].transcript + ' ';
        else interim += result[0].transcript;
      }
      this.answerText = (finalTranscript + interim).trim();
    };

    this.recognition!.onerror = () => this.isListening.set(false);
    this.recognition!.onend = () => this.isListening.set(false);

    this.recognition!.start();
    this.isListening.set(true);
  }

  stopListening() {
    this.recognition?.stop();
    this.isListening.set(false);
  }

  // ---- Answer submission ----
  submitAnswer() {
    const q = this.currentQuestion;
    if (!q) return;
    if (!this.answerText.trim()) {
      this.toast.show('Please provide an answer before submitting', 'error');
      return;
    }
    this.submitting.set(true);
    const responseTimeSeconds = Math.round((Date.now() - this.questionStartedAt) / 1000);

    this.interviewService
      .submitAnswer(this.interviewId, this.mode, { questionId: q._id, answerText: this.answerText, responseTimeSeconds })
      .subscribe({
        next: (res) => {
          this.answers.update((list) => [...list, res.data.answer]);
          this.lastEvaluation.set(res.data.answer);
          this.interview.update((i) => (i ? { ...i, answeredQuestions: i.answeredQuestions + 1 } : i));
        },
        error: () => this.submitting.set(false),
        complete: () => this.submitting.set(false),
      });
  }

  nextQuestion() {
    this.lastEvaluation.set(null);
    this.answerText = '';
    this.currentIndex.update((i) => Math.min(i + 1, this.questions().length - 1));
    this.questionStartedAt = Date.now();
    if (this.mode === 'voice') setTimeout(() => this.speakCurrentQuestion(), 300);
  }

  prevQuestion() {
    this.lastEvaluation.set(null);
    this.currentIndex.update((i) => Math.max(i - 1, 0));
    const existing = this.answers().find((a) => a.question === this.currentQuestion?._id);
    this.answerText = existing?.answerText || '';
  }

  get allAnswered(): boolean {
    return this.answeredCount >= this.questions().length && this.questions().length > 0;
  }

  finishInterview() {
    this.completing.set(true);
    this.interviewService.complete(this.interviewId, this.mode).subscribe({
      next: (res) => {
        this.interview.set(res.data.interview);
        this.toast.show('Interview completed! Here is your report.', 'success');
      },
      error: () => this.completing.set(false),
      complete: () => this.completing.set(false),
    });
  }

  downloadReport() {
    this.reportService.generateInterviewReport(this.interviewId).subscribe((res) => {
      window.open(this.reportService.downloadUrl(res.data.report._id), '_blank');
    });
  }
}
