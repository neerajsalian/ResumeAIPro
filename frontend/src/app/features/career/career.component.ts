import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ResumeService } from '../../core/services/resume.service';
import { CareerService } from '../../core/services/career.service';
import { AuthService } from '../../core/services/auth.service';
import { ToastService } from '../../core/services/toast.service';
import { CareerGuidance, Resume } from '../../core/models/models';

@Component({
  selector: 'app-career',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './career.component.html',
})
export class CareerComponent implements OnInit {
  resumes = signal<Resume[]>([]);
  selectedResumeId = '';
  targetJobRole = '';
  loading = signal(false);
  guidance = signal<CareerGuidance | null>(null);

  constructor(
    private route: ActivatedRoute,
    private resumeService: ResumeService,
    private careerService: CareerService,
    private auth: AuthService,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    this.targetJobRole = this.auth.currentUser()?.targetJobRole || '';
    this.resumeService.list().subscribe((res) => {
      this.resumes.set(res.data.resumes);
      const fromQuery = this.route.snapshot.queryParamMap.get('resumeId');
      this.selectedResumeId = fromQuery || res.data.resumes[0]?._id || '';
    });
  }

  getGuidance() {
    if (!this.selectedResumeId) {
      this.toast.show('Please select a resume first', 'error');
      return;
    }
    this.loading.set(true);
    this.careerService.getGuidance(this.selectedResumeId, this.targetJobRole).subscribe({
      next: (res) => this.guidance.set(res.data.guidance),
      error: () => this.loading.set(false),
      complete: () => this.loading.set(false),
    });
  }
}
