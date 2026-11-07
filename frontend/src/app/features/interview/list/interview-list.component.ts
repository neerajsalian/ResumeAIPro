import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { InterviewService } from '../../../core/services/interview.service';
import { Interview } from '../../../core/models/models';

@Component({
  selector: 'app-interview-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './interview-list.component.html',
})
export class InterviewListComponent implements OnInit {
  interviews = signal<Interview[]>([]);
  loading = signal(true);

  constructor(private interviewService: InterviewService) {}

  ngOnInit(): void {
    this.interviewService.list().subscribe({
      next: (res) => this.interviews.set(res.data.interviews),
      complete: () => this.loading.set(false),
    });
  }
}
