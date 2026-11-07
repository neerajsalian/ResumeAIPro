import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ResumeService } from '../../../core/services/resume.service';
import { InterviewService } from '../../../core/services/interview.service';
import { AuthService } from '../../../core/services/auth.service';
import { ToastService } from '../../../core/services/toast.service';
import { InterviewType, Resume } from '../../../core/models/models';

@Component({
  selector: 'app-interview-setup',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './interview-setup.component.html',
})
export class InterviewSetupComponent implements OnInit {
  resumes = signal<Resume[]>([]);
  selectedResumeId = '';
  interviewType: InterviewType = 'Technical';
  jobRole = '';
  mode: 'text' | 'voice' = 'text';
  questionCount = 6;
  creating = signal(false);

  types: InterviewType[] = ['HR', 'Technical', 'Project-Based', 'Behavioral'];

  constructor(
    private resumeService: ResumeService,
    private interviewService: InterviewService,
    private auth: AuthService,
    private router: Router,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    this.jobRole = this.auth.currentUser()?.targetJobRole || '';
    this.resumeService.list().subscribe((res) => {
      this.resumes.set(res.data.resumes);
      this.selectedResumeId = res.data.resumes[0]?._id || '';
    });
  }

  get voiceSupported() {
    return typeof window !== 'undefined' && 'webkitSpeechRecognition' in window;
  }

  start() {
    if (!this.selectedResumeId) {
      this.toast.show('Please upload a resume first', 'error');
      return;
    }
    this.creating.set(true);
    this.interviewService
      .create({
        resumeId: this.selectedResumeId,
        interviewType: this.interviewType,
        jobRole: this.jobRole,
        mode: this.mode,
        questionCount: this.questionCount,
      })
      .subscribe({
        next: (res) => this.router.navigate(['/interview', res.data.interview._id]),
        error: () => this.creating.set(false),
        complete: () => this.creating.set(false),
      });
  }
}
