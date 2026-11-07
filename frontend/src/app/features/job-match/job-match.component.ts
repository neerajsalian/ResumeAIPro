import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ResumeService } from '../../core/services/resume.service';
import { JobMatchService } from '../../core/services/job-match.service';
import { ToastService } from '../../core/services/toast.service';
import { JobMatch, Resume } from '../../core/models/models';

@Component({
  selector: 'app-job-match',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './job-match.component.html',
})
export class JobMatchComponent implements OnInit {
  resumes = signal<Resume[]>([]);
  matches = signal<JobMatch[]>([]);
  selectedResumeId = '';
  title = '';
  company = '';
  jdText = '';
  matching = signal(false);
  result = signal<JobMatch | null>(null);

  constructor(
    private route: ActivatedRoute,
    private resumeService: ResumeService,
    private jobMatchService: JobMatchService,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    this.resumeService.list().subscribe((res) => {
      this.resumes.set(res.data.resumes);
      const fromQuery = this.route.snapshot.queryParamMap.get('resumeId');
      this.selectedResumeId = fromQuery || res.data.resumes[0]?._id || '';
    });
    this.jobMatchService.list().subscribe((res) => this.matches.set(res.data.matches));
  }

  runMatch() {
    if (!this.selectedResumeId) {
      this.toast.show('Please select a resume first', 'error');
      return;
    }
    if (!this.jdText || this.jdText.trim().length < 30) {
      this.toast.show('Please paste a complete job description', 'error');
      return;
    }
    this.matching.set(true);
    this.jobMatchService
      .match(this.selectedResumeId, { title: this.title, company: this.company, jdText: this.jdText })
      .subscribe({
        next: (res) => {
          this.result.set(res.data.jobMatch);
          this.matches.update((list) => [res.data.jobMatch, ...list]);
          this.toast.show('Match analysis complete', 'success');
        },
        error: () => this.matching.set(false),
        complete: () => this.matching.set(false),
      });
  }
}
