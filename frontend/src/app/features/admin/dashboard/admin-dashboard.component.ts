import { Component, ElementRef, OnInit, ViewChild, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Chart, registerables } from 'chart.js';
import { AdminService } from '../../../core/services/admin.service';
import { AdminStats } from '../../../core/models/models';

Chart.register(...registerables);

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './admin-dashboard.component.html',
})
export class AdminDashboardComponent implements OnInit {
  @ViewChild('typeChart') typeChartRef?: ElementRef<HTMLCanvasElement>;
  @ViewChild('usersChart') usersChartRef?: ElementRef<HTMLCanvasElement>;

  stats = signal<AdminStats | null>(null);
  loading = signal(true);

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.adminService.getStats().subscribe({
      next: (res) => {
        this.stats.set(res.data);
        setTimeout(() => this.renderCharts(), 0);
      },
      complete: () => this.loading.set(false),
    });
  }

  renderCharts() {
    const s = this.stats();
    if (!s) return;

    if (this.typeChartRef) {
      new Chart(this.typeChartRef.nativeElement, {
        type: 'doughnut',
        data: {
          labels: s.interviewsByType.map((t) => t._id),
          datasets: [{ data: s.interviewsByType.map((t) => t.count), backgroundColor: ['#6366f1', '#22c55e', '#f59e0b', '#ef4444'] }],
        },
        options: { responsive: true, plugins: { legend: { position: 'bottom' } } },
      });
    }

    if (this.usersChartRef) {
      new Chart(this.usersChartRef.nativeElement, {
        type: 'line',
        data: {
          labels: s.usersOverTime.map((u) => u._id),
          datasets: [{ label: 'New Users', data: s.usersOverTime.map((u) => u.count), borderColor: '#6366f1', tension: 0.3 }],
        },
        options: { responsive: true, plugins: { legend: { display: false } } },
      });
    }
  }
}
