import { Component, ElementRef, OnInit, signal, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Chart, registerables } from 'chart.js';
import { ResumeService } from '../../../core/services/resume.service';
import { ReportService } from '../../../core/services/report.service';
import { ToastService } from '../../../core/services/toast.service';
import { AtsCheckResult, Resume, ResumeAnalysis } from '../../../core/models/models';
import { ScoreGaugeComponent } from '../../../shared/components/score-gauge/score-gauge.component';

Chart.register(...registerables);

@Component({
  selector: 'app-resume-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, ScoreGaugeComponent],
  templateUrl: './resume-detail.component.html',
})
export class ResumeDetailComponent implements OnInit, AfterViewInit {
  @ViewChild('skillsChart') skillsChartRef?: ElementRef<HTMLCanvasElement>;

  resumeId = '';
  resume = signal<Resume | null>(null);
  analysis = signal<ResumeAnalysis | null>(null);
  atsChecks = signal<AtsCheckResult | null>(null);
  analyzing = signal(false);
  loading = signal(true);
  targetJobRole = '';
  chart: Chart | null = null;

  constructor(
    private route: ActivatedRoute,
    private resumeService: ResumeService,
    private reportService: ReportService,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    this.resumeId = this.route.snapshot.paramMap.get('id') || '';
    this.resumeService.get(this.resumeId).subscribe((res) => {
      this.resume.set(res.data.resume);
      this.loading.set(false);
    });
    this.loadAnalysis();
    this.resumeService.runAtsChecks(this.resumeId).subscribe({
      next: (res) => this.atsChecks.set(res.data),
      error: () => {},
    });
  }

  ngAfterViewInit(): void {}

  loadAnalysis() {
    this.resumeService.getLatestAnalysis(this.resumeId).subscribe({
      next: (res) => {
        this.analysis.set(res.data.analysis);
        setTimeout(() => this.renderChart(), 0);
      },
      error: () => {},
    });
  }

  runAnalysis() {
    this.analyzing.set(true);
    this.resumeService.analyze(this.resumeId, this.targetJobRole).subscribe({
      next: (res) => {
        this.analysis.set(res.data.analysis);
        this.toast.show('AI analysis complete', 'success');
        setTimeout(() => this.renderChart(), 0);
      },
      error: () => this.analyzing.set(false),
      complete: () => this.analyzing.set(false),
    });
  }

  renderChart() {
    const a = this.analysis();
    if (!a || !this.skillsChartRef) return;
    this.chart?.destroy();
    const labels = ['Technical', 'Languages', 'Frameworks', 'Databases', 'Cloud', 'Soft Skills'];
    const data = [
      a.skills?.technicalSkills?.length || 0,
      a.skills?.programmingLanguages?.length || 0,
      a.skills?.frameworks?.length || 0,
      a.skills?.databases?.length || 0,
      a.skills?.cloudSkills?.length || 0,
      a.skills?.softSkills?.length || 0,
    ];
    this.chart = new Chart(this.skillsChartRef.nativeElement, {
      type: 'bar',
      data: {
        labels,
        datasets: [{ label: 'Skills detected', data, backgroundColor: '#6366f1', borderRadius: 6 }],
      },
      options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: { y: { beginAtZero: true, ticks: { stepSize: 1 } } },
      },
    });
  }

  downloadReport() {
    const a = this.analysis();
    if (!a) return;
    this.reportService.generateResumeReport(a._id).subscribe((res) => {
      window.open(this.reportService.downloadUrl(res.data.report._id), '_blank');
    });
  }
}
