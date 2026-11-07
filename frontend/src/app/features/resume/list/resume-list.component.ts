import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ResumeService } from '../../../core/services/resume.service';
import { ToastService } from '../../../core/services/toast.service';
import { Resume } from '../../../core/models/models';

@Component({
  selector: 'app-resume-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './resume-list.component.html',
})
export class ResumeListComponent implements OnInit {
  resumes = signal<Resume[]>([]);
  loading = signal(true);
  uploading = signal(false);
  dragOver = signal(false);

  constructor(private resumeService: ResumeService, private toast: ToastService) {}

  ngOnInit(): void {
    this.refresh();
  }

  refresh() {
    this.loading.set(true);
    this.resumeService.list().subscribe({
      next: (res) => this.resumes.set(res.data.resumes),
      complete: () => this.loading.set(false),
    });
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files?.length) this.uploadFile(input.files[0]);
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    this.dragOver.set(false);
    const file = event.dataTransfer?.files?.[0];
    if (file) this.uploadFile(file);
  }

  uploadFile(file: File) {
    if (file.type !== 'application/pdf') {
      this.toast.show('Only PDF resumes are supported', 'error');
      return;
    }
    this.uploading.set(true);
    this.resumeService.upload(file).subscribe({
      next: () => {
        this.toast.show('Resume uploaded and parsed successfully', 'success');
        this.refresh();
      },
      error: () => this.uploading.set(false),
      complete: () => this.uploading.set(false),
    });
  }

  deleteResume(id: string) {
    if (!confirm('Delete this resume? This cannot be undone.')) return;
    this.resumeService.delete(id).subscribe(() => {
      this.toast.show('Resume deleted', 'success');
      this.refresh();
    });
  }

  downloadUrl(id: string) {
    return this.resumeService.downloadUrl(id);
  }
}
