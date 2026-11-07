import { Component, Input, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
export class ScoreGaugeComponent {
    value = 0;
    label = 'Score';
    circumference = 2 * Math.PI * 52;
    offset = computed(() => this.circumference - (Math.min(100, Math.max(0, this.value)) / 100) * this.circumference, ...(ngDevMode ? [{ debugName: "offset" }] : []));
    color = computed(() => {
        if (this.value >= 75)
            return '#22c55e';
        if (this.value >= 50)
            return '#f59e0b';
        return '#ef4444';
    }, ...(ngDevMode ? [{ debugName: "color" }] : []));
    static ɵfac = function ScoreGaugeComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ScoreGaugeComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ScoreGaugeComponent, selectors: [["app-score-gauge"]], inputs: { value: "value", label: "label" }, decls: 11, vars: 10, consts: [[1, "score-gauge", "text-center"], ["viewBox", "0 0 120 120", 1, "gauge-svg"], ["cx", "60", "cy", "60", "r", "52", 1, "gauge-track"], ["cx", "60", "cy", "60", "r", "52", 1, "gauge-fill"], [1, "gauge-label"], [1, "gauge-value"], [1, "gauge-suffix", "text-muted"], [1, "gauge-title", "text-muted", "small", "mt-1"]], template: function ScoreGaugeComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵdomElementStart(0, "div", 0);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵdomElementStart(1, "svg", 1);
            i0.ɵɵdomElement(2, "circle", 2)(3, "circle", 3);
            i0.ɵɵdomElementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵdomElementStart(4, "div", 4)(5, "div", 5);
            i0.ɵɵtext(6);
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(7, "div", 6);
            i0.ɵɵtext(8, "/ 100");
            i0.ɵɵdomElementEnd()();
            i0.ɵɵdomElementStart(9, "div", 7);
            i0.ɵɵtext(10);
            i0.ɵɵdomElementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵstyleProp("stroke", ctx.color())("stroke-dasharray", ctx.circumference)("stroke-dashoffset", ctx.offset());
            i0.ɵɵadvance(2);
            i0.ɵɵstyleProp("color", ctx.color());
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate(ctx.value);
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate(ctx.label);
        } }, dependencies: [CommonModule], styles: [".score-gauge[_ngcontent-%COMP%] { position: relative; width: 140px; margin: 0 auto; }\n    .gauge-svg[_ngcontent-%COMP%] { width: 100%; transform: rotate(-90deg); }\n    .gauge-track[_ngcontent-%COMP%] { fill: none; stroke: var(--bs-secondary-bg); stroke-width: 10; }\n    .gauge-fill[_ngcontent-%COMP%] { fill: none; stroke-width: 10; stroke-linecap: round; transition: stroke-dashoffset 0.6s ease; }\n    .gauge-label[_ngcontent-%COMP%] { position: absolute; top: 38px; left: 0; right: 0; }\n    .gauge-value[_ngcontent-%COMP%] { font-size: 1.8rem; font-weight: 700; line-height: 1; }\n    .gauge-suffix[_ngcontent-%COMP%] { font-size: 0.7rem; }"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ScoreGaugeComponent, [{
        type: Component,
        args: [{ selector: 'app-score-gauge', standalone: true, imports: [CommonModule], template: `
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
  `, styles: ["\n    .score-gauge { position: relative; width: 140px; margin: 0 auto; }\n    .gauge-svg { width: 100%; transform: rotate(-90deg); }\n    .gauge-track { fill: none; stroke: var(--bs-secondary-bg); stroke-width: 10; }\n    .gauge-fill { fill: none; stroke-width: 10; stroke-linecap: round; transition: stroke-dashoffset 0.6s ease; }\n    .gauge-label { position: absolute; top: 38px; left: 0; right: 0; }\n    .gauge-value { font-size: 1.8rem; font-weight: 700; line-height: 1; }\n    .gauge-suffix { font-size: 0.7rem; }\n  "] }]
    }], null, { value: [{
            type: Input
        }], label: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ScoreGaugeComponent, { className: "ScoreGaugeComponent", filePath: "src/app/shared/components/score-gauge/score-gauge.component.ts", lineNumber: 39 }); })();
