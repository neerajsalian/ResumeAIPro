import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ScoreGaugeComponent } from '../../shared/components/score-gauge/score-gauge.component';
import * as i0 from "@angular/core";
import * as i1 from "../../core/services/auth.service";
import * as i2 from "../../core/services/resume.service";
import * as i3 from "../../core/services/interview.service";
const _c0 = a0 => ["/resume", a0];
const _c1 = a0 => ["/interview", a0];
const _forTrack0 = ($index, $item) => $item._id;
function DashboardComponent_Conditional_45_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-score-gauge", 15);
} if (rf & 2) {
    i0.ɵɵproperty("value", ctx.resumeStrengthScore);
} }
function DashboardComponent_Conditional_46_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 16);
    i0.ɵɵtext(1, "Upload and analyze a resume to see your score.");
    i0.ɵɵelementEnd();
} }
function DashboardComponent_Conditional_52_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 21)(1, "div")(2, "div", 22);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 23);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "a", 24);
    i0.ɵɵtext(7, "View");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const r_r1 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(r_r1.originalFileName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("v", r_r1.version, " \u00B7 ", r_r1.status);
    i0.ɵɵadvance();
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(4, _c0, r_r1._id));
} }
function DashboardComponent_Conditional_52_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 18);
    i0.ɵɵrepeaterCreate(1, DashboardComponent_Conditional_52_For_2_Template, 8, 6, "li", 21, _forTrack0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r1.resumes().slice(0, 5));
} }
function DashboardComponent_Conditional_53_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 16);
    i0.ɵɵtext(1, "No resumes uploaded yet.");
    i0.ɵɵelementEnd();
} }
function DashboardComponent_Conditional_58_For_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "td")(6, "span", 26);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "td")(9, "span", 27);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "td");
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "td")(14, "a", 24);
    i0.ɵɵtext(15, "Open");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const i_r3 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i_r3.interviewType);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i_r3.jobRole || "\u2014");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i_r3.mode);
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("text-bg-success", i_r3.status === "completed")("text-bg-warning", i_r3.status === "in-progress")("text-bg-secondary", i_r3.status !== "completed" && i_r3.status !== "in-progress");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i_r3.status);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i_r3.overallScore ?? "\u2014");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(12, _c1, i_r3._id));
} }
function DashboardComponent_Conditional_58_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20)(1, "table", 25)(2, "thead")(3, "tr", 9)(4, "th");
    i0.ɵɵtext(5, "Type");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "th");
    i0.ɵɵtext(7, "Job Role");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "th");
    i0.ɵɵtext(9, "Mode");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "th");
    i0.ɵɵtext(11, "Status");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "th");
    i0.ɵɵtext(13, "Score");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(14, "th");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "tbody");
    i0.ɵɵrepeaterCreate(16, DashboardComponent_Conditional_58_For_17_Template, 16, 14, "tr", null, _forTrack0);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(16);
    i0.ɵɵrepeater(ctx_r1.interviews().slice(0, 5));
} }
function DashboardComponent_Conditional_59_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 16);
    i0.ɵɵtext(1, "No interviews yet. ");
    i0.ɵɵelementStart(2, "a", 28);
    i0.ɵɵtext(3, "Start your first mock interview");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, ".");
    i0.ɵɵelementEnd();
} }
export class DashboardComponent {
    auth;
    resumeService;
    interviewService;
    resumes = signal([], ...(ngDevMode ? [{ debugName: "resumes" }] : []));
    analyses = signal([], ...(ngDevMode ? [{ debugName: "analyses" }] : []));
    interviews = signal([], ...(ngDevMode ? [{ debugName: "interviews" }] : []));
    loading = signal(true, ...(ngDevMode ? [{ debugName: "loading" }] : []));
    latestAnalysis = signal(null, ...(ngDevMode ? [{ debugName: "latestAnalysis" }] : []));
    constructor(auth, resumeService, interviewService) {
        this.auth = auth;
        this.resumeService = resumeService;
        this.interviewService = interviewService;
    }
    ngOnInit() {
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
        if (!completed.length)
            return 0;
        return Math.round(completed.reduce((sum, i) => sum + (i.overallScore || 0), 0) / completed.length);
    }
    static ɵfac = function DashboardComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || DashboardComponent)(i0.ɵɵdirectiveInject(i1.AuthService), i0.ɵɵdirectiveInject(i2.ResumeService), i0.ɵɵdirectiveInject(i3.InterviewService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 60, vars: 8, consts: [[1, "d-flex", "justify-content-between", "align-items-center", "mb-4", "flex-wrap", "gap-2"], [1, "fw-bold", "mb-0"], [1, "text-muted", "mb-0"], ["routerLink", "/resume", 1, "btn", "btn-primary"], [1, "bi", "bi-upload", "me-1"], [1, "row", "g-3", "mb-4"], [1, "col-6", "col-md-3"], [1, "card", "border-0", "shadow-sm", "h-100"], [1, "card-body"], [1, "text-muted", "small"], [1, "fs-3", "fw-bold"], [1, "row", "g-3"], [1, "col-md-4"], [1, "card-body", "text-center"], [1, "text-muted", "mb-3"], ["label", "Strength Score", 3, "value"], [1, "text-muted", "small", "mb-0"], [1, "col-md-8"], [1, "list-group", "list-group-flush"], [1, "card", "border-0", "shadow-sm", "mt-3"], [1, "table-responsive"], [1, "list-group-item", "d-flex", "justify-content-between", "align-items-center", "px-0"], [1, "fw-semibold"], [1, "small", "text-muted"], [1, "btn", "btn-sm", "btn-outline-primary", 3, "routerLink"], [1, "table", "align-middle", "mb-0"], [1, "badge", "text-bg-light", "border"], [1, "badge"], ["routerLink", "/interview"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div")(1, "div", 0)(2, "div")(3, "h3", 1);
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "p", 2);
            i0.ɵɵtext(6, "Here's an overview of your resume and interview progress.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(7, "a", 3);
            i0.ɵɵelement(8, "i", 4);
            i0.ɵɵtext(9, " Upload Resume");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(10, "div", 5)(11, "div", 6)(12, "div", 7)(13, "div", 8)(14, "div", 9);
            i0.ɵɵtext(15, "Resumes Uploaded");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "div", 10);
            i0.ɵɵtext(17);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(18, "div", 6)(19, "div", 7)(20, "div", 8)(21, "div", 9);
            i0.ɵɵtext(22, "Latest ATS Score");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(23, "div", 10);
            i0.ɵɵtext(24);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(25, "div", 6)(26, "div", 7)(27, "div", 8)(28, "div", 9);
            i0.ɵɵtext(29, "Interviews Completed");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(30, "div", 10);
            i0.ɵɵtext(31);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(32, "div", 6)(33, "div", 7)(34, "div", 8)(35, "div", 9);
            i0.ɵɵtext(36, "Avg. Interview Score");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(37, "div", 10);
            i0.ɵɵtext(38);
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵelementStart(39, "div", 11)(40, "div", 12)(41, "div", 7)(42, "div", 13)(43, "h6", 14);
            i0.ɵɵtext(44, "Resume Strength");
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(45, DashboardComponent_Conditional_45_Template, 1, 1, "app-score-gauge", 15)(46, DashboardComponent_Conditional_46_Template, 2, 0, "p", 16);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(47, "div", 17)(48, "div", 7)(49, "div", 8)(50, "h6", 14);
            i0.ɵɵtext(51, "Recent Resumes");
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(52, DashboardComponent_Conditional_52_Template, 3, 0, "ul", 18)(53, DashboardComponent_Conditional_53_Template, 2, 0, "p", 16);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(54, "div", 19)(55, "div", 8)(56, "h6", 14);
            i0.ɵɵtext(57, "Recent Interviews");
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(58, DashboardComponent_Conditional_58_Template, 18, 0, "div", 20)(59, DashboardComponent_Conditional_59_Template, 5, 0, "p", 16);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            let tmp_0_0;
            let tmp_2_0;
            let tmp_5_0;
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate1("Welcome back, ", (tmp_0_0 = ctx.auth.currentUser()) == null ? null : tmp_0_0.name, " \uD83D\uDC4B");
            i0.ɵɵadvance(13);
            i0.ɵɵtextInterpolate(ctx.resumes().length);
            i0.ɵɵadvance(7);
            i0.ɵɵtextInterpolate(((tmp_2_0 = ctx.latestAnalysis()) == null ? null : tmp_2_0.atsScore) ?? "\u2014");
            i0.ɵɵadvance(7);
            i0.ɵɵtextInterpolate(ctx.completedInterviews.length);
            i0.ɵɵadvance(7);
            i0.ɵɵtextInterpolate(ctx.avgInterviewScore);
            i0.ɵɵadvance(7);
            i0.ɵɵconditional((tmp_5_0 = ctx.latestAnalysis()) ? 45 : 46, tmp_5_0);
            i0.ɵɵadvance(7);
            i0.ɵɵconditional(ctx.resumes().length ? 52 : 53);
            i0.ɵɵadvance(6);
            i0.ɵɵconditional(ctx.interviews().length ? 58 : 59);
        } }, dependencies: [CommonModule, RouterLink, ScoreGaugeComponent], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DashboardComponent, [{
        type: Component,
        args: [{ selector: 'app-dashboard', standalone: true, imports: [CommonModule, RouterLink, ScoreGaugeComponent], template: "<div>\n  <div class=\"d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2\">\n    <div>\n      <h3 class=\"fw-bold mb-0\">Welcome back, {{ auth.currentUser()?.name }} \uD83D\uDC4B</h3>\n      <p class=\"text-muted mb-0\">Here's an overview of your resume and interview progress.</p>\n    </div>\n    <a routerLink=\"/resume\" class=\"btn btn-primary\"><i class=\"bi bi-upload me-1\"></i> Upload Resume</a>\n  </div>\n\n  <div class=\"row g-3 mb-4\">\n    <div class=\"col-6 col-md-3\">\n      <div class=\"card border-0 shadow-sm h-100\">\n        <div class=\"card-body\">\n          <div class=\"text-muted small\">Resumes Uploaded</div>\n          <div class=\"fs-3 fw-bold\">{{ resumes().length }}</div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-6 col-md-3\">\n      <div class=\"card border-0 shadow-sm h-100\">\n        <div class=\"card-body\">\n          <div class=\"text-muted small\">Latest ATS Score</div>\n          <div class=\"fs-3 fw-bold\">{{ latestAnalysis()?.atsScore ?? '\u2014' }}</div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-6 col-md-3\">\n      <div class=\"card border-0 shadow-sm h-100\">\n        <div class=\"card-body\">\n          <div class=\"text-muted small\">Interviews Completed</div>\n          <div class=\"fs-3 fw-bold\">{{ completedInterviews.length }}</div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-6 col-md-3\">\n      <div class=\"card border-0 shadow-sm h-100\">\n        <div class=\"card-body\">\n          <div class=\"text-muted small\">Avg. Interview Score</div>\n          <div class=\"fs-3 fw-bold\">{{ avgInterviewScore }}</div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row g-3\">\n    <div class=\"col-md-4\">\n      <div class=\"card border-0 shadow-sm h-100\">\n        <div class=\"card-body text-center\">\n          <h6 class=\"text-muted mb-3\">Resume Strength</h6>\n          @if (latestAnalysis(); as a) {\n            <app-score-gauge [value]=\"a.resumeStrengthScore\" label=\"Strength Score\" />\n          } @else {\n            <p class=\"text-muted small mb-0\">Upload and analyze a resume to see your score.</p>\n          }\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-md-8\">\n      <div class=\"card border-0 shadow-sm h-100\">\n        <div class=\"card-body\">\n          <h6 class=\"text-muted mb-3\">Recent Resumes</h6>\n          @if (resumes().length) {\n            <ul class=\"list-group list-group-flush\">\n              @for (r of resumes().slice(0, 5); track r._id) {\n                <li class=\"list-group-item d-flex justify-content-between align-items-center px-0\">\n                  <div>\n                    <div class=\"fw-semibold\">{{ r.originalFileName }}</div>\n                    <div class=\"small text-muted\">v{{ r.version }} \u00B7 {{ r.status }}</div>\n                  </div>\n                  <a [routerLink]=\"['/resume', r._id]\" class=\"btn btn-sm btn-outline-primary\">View</a>\n                </li>\n              }\n            </ul>\n          } @else {\n            <p class=\"text-muted small mb-0\">No resumes uploaded yet.</p>\n          }\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"card border-0 shadow-sm mt-3\">\n    <div class=\"card-body\">\n      <h6 class=\"text-muted mb-3\">Recent Interviews</h6>\n      @if (interviews().length) {\n        <div class=\"table-responsive\">\n          <table class=\"table align-middle mb-0\">\n            <thead>\n              <tr class=\"text-muted small\"><th>Type</th><th>Job Role</th><th>Mode</th><th>Status</th><th>Score</th><th></th></tr>\n            </thead>\n            <tbody>\n              @for (i of interviews().slice(0, 5); track i._id) {\n                <tr>\n                  <td>{{ i.interviewType }}</td>\n                  <td>{{ i.jobRole || '\u2014' }}</td>\n                  <td><span class=\"badge text-bg-light border\">{{ i.mode }}</span></td>\n                  <td><span class=\"badge\" [class.text-bg-success]=\"i.status === 'completed'\" [class.text-bg-warning]=\"i.status === 'in-progress'\" [class.text-bg-secondary]=\"i.status !== 'completed' && i.status !== 'in-progress'\">{{ i.status }}</span></td>\n                  <td>{{ i.overallScore ?? '\u2014' }}</td>\n                  <td><a [routerLink]=\"['/interview', i._id]\" class=\"btn btn-sm btn-outline-primary\">Open</a></td>\n                </tr>\n              }\n            </tbody>\n          </table>\n        </div>\n      } @else {\n        <p class=\"text-muted small mb-0\">No interviews yet. <a routerLink=\"/interview\">Start your first mock interview</a>.</p>\n      }\n    </div>\n  </div>\n</div>\n" }]
    }], () => [{ type: i1.AuthService }, { type: i2.ResumeService }, { type: i3.InterviewService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "src/app/features/dashboard/dashboard.component.ts", lineNumber: 16 }); })();
