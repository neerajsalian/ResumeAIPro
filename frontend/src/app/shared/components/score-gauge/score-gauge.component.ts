import { Component, Input, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-score-gauge',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="score-gauge text-center">
      <svg viewBox="0 0 120 120" class="gauge-svg">
        <circle cx="60" cy="60" r="52" class="gauge-track" />
        <circle
          cx="60"
          cy="60"
          r="52"
          class="gauge-fill"
          [style.stroke]="color()"
          [style.strokeDasharray]="circumference"
          [style.strokeDashoffset]="offset()"
        />
      </svg>
      <div class="gauge-label">
        <div class="gauge-value" [style.color]="color()">{{ value }}</div>
        <div class="gauge-suffix text-muted">/ 100</div>
      </div>
      <div class="gauge-title text-muted small mt-1">{{ label }}</div>
    </div>
  `,
  styles: [`
    .score-gauge { position: relative; width: 140px; margin: 0 auto; }
    .gauge-svg { width: 100%; transform: rotate(-90deg); }
    .gauge-track { fill: none; stroke: var(--bs-secondary-bg); stroke-width: 10; }
    .gauge-fill { fill: none; stroke-width: 10; stroke-linecap: round; transition: stroke-dashoffset 0.6s ease; }
    .gauge-label { position: absolute; top: 38px; left: 0; right: 0; }
    .gauge-value { font-size: 1.8rem; font-weight: 700; line-height: 1; }
    .gauge-suffix { font-size: 0.7rem; }
  `],
})
export class ScoreGaugeComponent {
  @Input() value = 0;
  @Input() label = 'Score';

  circumference = 2 * Math.PI * 52;

  offset = computed(() => this.circumference - (Math.min(100, Math.max(0, this.value)) / 100) * this.circumference);

  color = computed(() => {
    if (this.value >= 75) return '#22c55e';
    if (this.value >= 50) return '#f59e0b';
    return '#ef4444';
  });
}
