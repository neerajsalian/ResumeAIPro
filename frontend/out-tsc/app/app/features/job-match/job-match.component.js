import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../../core/services/resume.service";
import * as i3 from "../../core/services/job-match.service";
import * as i4 from "../../core/services/toast.service";
import * as i5 from "@angular/forms";
import * as i6 from "@angular/common";
const _forTrack0 = ($index, $item) => $item._id;
function JobMatchComponent_For_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 7);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const r_r1 = ctx.$implicit;
    i0.ɵɵproperty("value", r_r1._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2("", r_r1.originalFileName, " (v", r_r1.version, ")");
} }
function JobMatchComponent_Conditional_30_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 14);
    i0.ɵɵtext(1, " Analyzing\u2026 ");
} }
function JobMatchComponent_Conditional_31_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 15);
    i0.ɵɵtext(1, " Analyze Match ");
} }
function JobMatchComponent_Conditional_32_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const r_r2 = i0.ɵɵnextContext();
    i0.ɵɵtextInterpolate1(" \u2014 ", r_r2.title, " ");
} }
function JobMatchComponent_Conditional_32_For_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 25);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const k_r3 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(k_r3);
} }
function JobMatchComponent_Conditional_32_For_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 27);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const k_r4 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(k_r4);
} }
function JobMatchComponent_Conditional_32_For_30_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const s_r5 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(s_r5);
} }
function JobMatchComponent_Conditional_32_For_36_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const s_r6 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(s_r6);
} }
function JobMatchComponent_Conditional_32_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1)(1, "div", 2)(2, "div", 16)(3, "h5", 17);
    i0.ɵɵtext(4, "Match Result ");
    i0.ɵɵconditionalCreate(5, JobMatchComponent_Conditional_32_Conditional_5_Template, 1, 1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "span", 18);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "div", 19);
    i0.ɵɵelement(9, "div", 20);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "div", 3)(11, "div", 21)(12, "h6", 22);
    i0.ɵɵelement(13, "i", 23);
    i0.ɵɵtext(14, "Matched Keywords");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "div", 24);
    i0.ɵɵrepeaterCreate(16, JobMatchComponent_Conditional_32_For_17_Template, 2, 1, "span", 25, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "div", 21)(19, "h6", 22);
    i0.ɵɵelement(20, "i", 26);
    i0.ɵɵtext(21, "Missing Keywords");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "div", 24);
    i0.ɵɵrepeaterCreate(23, JobMatchComponent_Conditional_32_For_24_Template, 2, 1, "span", 27, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(25, "div", 21)(26, "h6", 22);
    i0.ɵɵtext(27, "Suggested Resume Edits");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "ul", 28);
    i0.ɵɵrepeaterCreate(29, JobMatchComponent_Conditional_32_For_30_Template, 2, 1, "li", null, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(31, "div", 21)(32, "h6", 22);
    i0.ɵɵtext(33, "ATS Optimization Tips");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(34, "ul", 28);
    i0.ɵɵrepeaterCreate(35, JobMatchComponent_Conditional_32_For_36_Template, 2, 1, "li", null, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const r_r2 = ctx;
    i0.ɵɵadvance(5);
    i0.ɵɵconditional(r_r2.title ? 5 : -1);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("text-bg-success", r_r2.matchPercentage >= 75)("text-bg-warning", r_r2.matchPercentage >= 50 && r_r2.matchPercentage < 75)("text-bg-danger", r_r2.matchPercentage < 50);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", r_r2.matchPercentage, "% Match ");
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("width", r_r2.matchPercentage, "%");
    i0.ɵɵadvance(7);
    i0.ɵɵrepeater(r_r2.matchedKeywords);
    i0.ɵɵadvance(7);
    i0.ɵɵrepeater(r_r2.missingKeywords);
    i0.ɵɵadvance(6);
    i0.ɵɵrepeater(r_r2.suggestions);
    i0.ɵɵadvance(6);
    i0.ɵɵrepeater(r_r2.atsOptimizationTips);
} }
function JobMatchComponent_Conditional_33_For_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "td");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "td", 32);
    i0.ɵɵtext(8);
    i0.ɵɵpipe(9, "date");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const m_r7 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(m_r7.title || "\u2014");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(m_r7.company || "\u2014");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", m_r7.matchPercentage, "%");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(9, 4, m_r7.createdAt, "short"));
} }
function JobMatchComponent_Conditional_33_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h6", 22);
    i0.ɵɵtext(1, "Match History");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "div", 29)(3, "table", 30)(4, "thead")(5, "tr", 31)(6, "th");
    i0.ɵɵtext(7, "Title");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "th");
    i0.ɵɵtext(9, "Company");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "th");
    i0.ɵɵtext(11, "Match %");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "th");
    i0.ɵɵtext(13, "Date");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(14, "tbody");
    i0.ɵɵrepeaterCreate(15, JobMatchComponent_Conditional_33_For_16_Template, 10, 7, "tr", null, _forTrack0);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵadvance(15);
    i0.ɵɵrepeater(ctx_r7.matches());
} }
export class JobMatchComponent {
    route;
    resumeService;
    jobMatchService;
    toast;
    resumes = signal([], ...(ngDevMode ? [{ debugName: "resumes" }] : []));
    matches = signal([], ...(ngDevMode ? [{ debugName: "matches" }] : []));
    selectedResumeId = '';
    title = '';
    company = '';
    jdText = '';
    matching = signal(false, ...(ngDevMode ? [{ debugName: "matching" }] : []));
    result = signal(null, ...(ngDevMode ? [{ debugName: "result" }] : []));
    constructor(route, resumeService, jobMatchService, toast) {
        this.route = route;
        this.resumeService = resumeService;
        this.jobMatchService = jobMatchService;
        this.toast = toast;
    }
    ngOnInit() {
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
    static ɵfac = function JobMatchComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || JobMatchComponent)(i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(i2.ResumeService), i0.ɵɵdirectiveInject(i3.JobMatchService), i0.ɵɵdirectiveInject(i4.ToastService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: JobMatchComponent, selectors: [["app-job-match"]], decls: 34, vars: 8, consts: [[1, "fw-bold", "mb-3"], [1, "card", "border-0", "shadow-sm", "mb-4"], [1, "card-body"], [1, "row", "g-3"], [1, "col-md-4"], [1, "form-label", "small"], [1, "form-select", 3, "ngModelChange", "ngModel"], [3, "value"], [1, "text-muted"], ["type", "text", "placeholder", "e.g. Senior Backend Engineer", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "e.g. Acme Corp", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "col-12"], ["rows", "8", "placeholder", "Paste the full job description here\u2026", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "btn", "btn-primary", 3, "click", "disabled"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "bi", "bi-bullseye", "me-1"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-3"], [1, "mb-0"], [1, "badge", "fs-6"], [1, "progress", "mb-4", 2, "height", "10px"], [1, "progress-bar"], [1, "col-md-6"], [1, "text-muted", "mb-2"], [1, "bi", "bi-check2-circle", "text-success", "me-1"], [1, "d-flex", "flex-wrap", "gap-1"], [1, "badge", "text-bg-success-subtle", "text-success-emphasis", "border"], [1, "bi", "bi-exclamation-circle", "text-danger", "me-1"], [1, "badge", "text-bg-danger-subtle", "text-danger-emphasis", "border"], [1, "small", "ps-3"], [1, "table-responsive"], [1, "table", "align-middle"], [1, "text-muted", "small"], [1, "small", "text-muted"]], template: function JobMatchComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div")(1, "h3", 0);
            i0.ɵɵtext(2, "Job Description Matching");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "div", 1)(4, "div", 2)(5, "div", 3)(6, "div", 4)(7, "label", 5);
            i0.ɵɵtext(8, "Resume");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "select", 6);
            i0.ɵɵtwoWayListener("ngModelChange", function JobMatchComponent_Template_select_ngModelChange_9_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.selectedResumeId, $event) || (ctx.selectedResumeId = $event); return $event; });
            i0.ɵɵrepeaterCreate(10, JobMatchComponent_For_11_Template, 2, 3, "option", 7, _forTrack0);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(12, "div", 4)(13, "label", 5);
            i0.ɵɵtext(14, "Job Title ");
            i0.ɵɵelementStart(15, "span", 8);
            i0.ɵɵtext(16, "(optional)");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(17, "input", 9);
            i0.ɵɵtwoWayListener("ngModelChange", function JobMatchComponent_Template_input_ngModelChange_17_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.title, $event) || (ctx.title = $event); return $event; });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(18, "div", 4)(19, "label", 5);
            i0.ɵɵtext(20, "Company ");
            i0.ɵɵelementStart(21, "span", 8);
            i0.ɵɵtext(22, "(optional)");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(23, "input", 10);
            i0.ɵɵtwoWayListener("ngModelChange", function JobMatchComponent_Template_input_ngModelChange_23_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.company, $event) || (ctx.company = $event); return $event; });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(24, "div", 11)(25, "label", 5);
            i0.ɵɵtext(26, "Job Description");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(27, "textarea", 12);
            i0.ɵɵtwoWayListener("ngModelChange", function JobMatchComponent_Template_textarea_ngModelChange_27_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.jdText, $event) || (ctx.jdText = $event); return $event; });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(28, "div", 11)(29, "button", 13);
            i0.ɵɵlistener("click", function JobMatchComponent_Template_button_click_29_listener() { return ctx.runMatch(); });
            i0.ɵɵconditionalCreate(30, JobMatchComponent_Conditional_30_Template, 2, 0)(31, JobMatchComponent_Conditional_31_Template, 2, 0);
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵconditionalCreate(32, JobMatchComponent_Conditional_32_Template, 37, 10, "div", 1);
            i0.ɵɵconditionalCreate(33, JobMatchComponent_Conditional_33_Template, 17, 0);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            let tmp_7_0;
            i0.ɵɵadvance(9);
            i0.ɵɵtwoWayProperty("ngModel", ctx.selectedResumeId);
            i0.ɵɵadvance();
            i0.ɵɵrepeater(ctx.resumes());
            i0.ɵɵadvance(7);
            i0.ɵɵtwoWayProperty("ngModel", ctx.title);
            i0.ɵɵadvance(6);
            i0.ɵɵtwoWayProperty("ngModel", ctx.company);
            i0.ɵɵadvance(4);
            i0.ɵɵtwoWayProperty("ngModel", ctx.jdText);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("disabled", ctx.matching());
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.matching() ? 30 : 31);
            i0.ɵɵadvance(2);
            i0.ɵɵconditional((tmp_7_0 = ctx.result()) ? 32 : -1, tmp_7_0);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.matches().length ? 33 : -1);
        } }, dependencies: [CommonModule, FormsModule, i5.NgSelectOption, i5.ɵNgSelectMultipleOption, i5.DefaultValueAccessor, i5.SelectControlValueAccessor, i5.NgControlStatus, i5.NgModel, i6.DatePipe], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(JobMatchComponent, [{
        type: Component,
        args: [{ selector: 'app-job-match', standalone: true, imports: [CommonModule, FormsModule], template: "<div>\n  <h3 class=\"fw-bold mb-3\">Job Description Matching</h3>\n\n  <div class=\"card border-0 shadow-sm mb-4\">\n    <div class=\"card-body\">\n      <div class=\"row g-3\">\n        <div class=\"col-md-4\">\n          <label class=\"form-label small\">Resume</label>\n          <select class=\"form-select\" [(ngModel)]=\"selectedResumeId\">\n            @for (r of resumes(); track r._id) {\n              <option [value]=\"r._id\">{{ r.originalFileName }} (v{{ r.version }})</option>\n            }\n          </select>\n        </div>\n        <div class=\"col-md-4\">\n          <label class=\"form-label small\">Job Title <span class=\"text-muted\">(optional)</span></label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"title\" placeholder=\"e.g. Senior Backend Engineer\" />\n        </div>\n        <div class=\"col-md-4\">\n          <label class=\"form-label small\">Company <span class=\"text-muted\">(optional)</span></label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"company\" placeholder=\"e.g. Acme Corp\" />\n        </div>\n        <div class=\"col-12\">\n          <label class=\"form-label small\">Job Description</label>\n          <textarea class=\"form-control\" rows=\"8\" [(ngModel)]=\"jdText\" placeholder=\"Paste the full job description here\u2026\"></textarea>\n        </div>\n        <div class=\"col-12\">\n          <button class=\"btn btn-primary\" (click)=\"runMatch()\" [disabled]=\"matching()\">\n            @if (matching()) { <span class=\"spinner-border spinner-border-sm me-2\"></span> Analyzing\u2026 } @else { <i class=\"bi bi-bullseye me-1\"></i> Analyze Match }\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  @if (result(); as r) {\n    <div class=\"card border-0 shadow-sm mb-4\">\n      <div class=\"card-body\">\n        <div class=\"d-flex justify-content-between align-items-center mb-3\">\n          <h5 class=\"mb-0\">Match Result @if (r.title) { \u2014 {{ r.title }} }</h5>\n          <span class=\"badge fs-6\" [class.text-bg-success]=\"r.matchPercentage >= 75\" [class.text-bg-warning]=\"r.matchPercentage >= 50 && r.matchPercentage < 75\" [class.text-bg-danger]=\"r.matchPercentage < 50\">\n            {{ r.matchPercentage }}% Match\n          </span>\n        </div>\n        <div class=\"progress mb-4\" style=\"height: 10px;\">\n          <div class=\"progress-bar\" [style.width.%]=\"r.matchPercentage\"></div>\n        </div>\n\n        <div class=\"row g-3\">\n          <div class=\"col-md-6\">\n            <h6 class=\"text-muted mb-2\"><i class=\"bi bi-check2-circle text-success me-1\"></i>Matched Keywords</h6>\n            <div class=\"d-flex flex-wrap gap-1\">\n              @for (k of r.matchedKeywords; track k) { <span class=\"badge text-bg-success-subtle text-success-emphasis border\">{{ k }}</span> }\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <h6 class=\"text-muted mb-2\"><i class=\"bi bi-exclamation-circle text-danger me-1\"></i>Missing Keywords</h6>\n            <div class=\"d-flex flex-wrap gap-1\">\n              @for (k of r.missingKeywords; track k) { <span class=\"badge text-bg-danger-subtle text-danger-emphasis border\">{{ k }}</span> }\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <h6 class=\"text-muted mb-2\">Suggested Resume Edits</h6>\n            <ul class=\"small ps-3\">@for (s of r.suggestions; track s) { <li>{{ s }}</li> }</ul>\n          </div>\n          <div class=\"col-md-6\">\n            <h6 class=\"text-muted mb-2\">ATS Optimization Tips</h6>\n            <ul class=\"small ps-3\">@for (s of r.atsOptimizationTips; track s) { <li>{{ s }}</li> }</ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  }\n\n  @if (matches().length) {\n    <h6 class=\"text-muted mb-2\">Match History</h6>\n    <div class=\"table-responsive\">\n      <table class=\"table align-middle\">\n        <thead><tr class=\"text-muted small\"><th>Title</th><th>Company</th><th>Match %</th><th>Date</th></tr></thead>\n        <tbody>\n          @for (m of matches(); track m._id) {\n            <tr>\n              <td>{{ m.title || '\u2014' }}</td>\n              <td>{{ m.company || '\u2014' }}</td>\n              <td>{{ m.matchPercentage }}%</td>\n              <td class=\"small text-muted\">{{ m.createdAt | date: 'short' }}</td>\n            </tr>\n          }\n        </tbody>\n      </table>\n    </div>\n  }\n</div>\n" }]
    }], () => [{ type: i1.ActivatedRoute }, { type: i2.ResumeService }, { type: i3.JobMatchService }, { type: i4.ToastService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(JobMatchComponent, { className: "JobMatchComponent", filePath: "src/app/features/job-match/job-match.component.ts", lineNumber: 16 }); })();
