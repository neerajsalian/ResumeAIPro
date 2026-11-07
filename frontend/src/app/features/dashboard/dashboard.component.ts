import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ResumeService } from '../../core/services/resume.service';
import { InterviewService } from '../../core/services/interview.service';
import { AuthService } from '../../core/services/auth.service';
import { Resume, ResumeAnalysis, Interview } from '../../core/models/models';
import { ScoreGaugeComponent } from '../../shared/components/score-gauge/score-gauge.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink, ScoreGaugeComponent],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  resumes = signal<Resume[]>([]);
  analyses = signal<ResumeAnalysis[]>([]);
  interviews = signal<Interview[]>([]);
  loading = signal(true);

  latestAnalysis = signal<ResumeAnalysis | null>(null);

  constructor(
    public auth: AuthService,
    private resumeService: ResumeService,
    private interviewService: InterviewService
  ) {}

  ngOnInit(): void {
    this.resumeService.list().subscribe((res) => this.resumes.set(res.data.resumes));
    this.resumeService.getAnalysisHistory().subscribe((res) => {
      this.analyses.set(res.data.analyses);
      this.latestAnalysis.set(res.data.analyses[0] || null);
    });
    this.interviewService.list().subscribe({
      next: (res) => this.interviews.set(res.data.interviews),
      complete: () => this.loading.set(false),
    });
  }

  get completedInterviews() {
    return this.interviews().filter((i) => i.status === 'completed');
  }

  get avgInterviewScore() {
    const completed = this.completedInterviews;
    if (!completed.length) return 0;
    return Math.round(completed.reduce((sum, i) => sum + (i.overallScore || 0), 0) / completed.length);
  }
}
