import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import * as i0 from "@angular/core";
import * as i1 from "../../../core/services/interview.service";
const _c0 = a0 => ["/interview", a0];
const _forTrack0 = ($index, $item) => $item._id;
function InterviewListComponent_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵelement(1, "div", 7);
    i0.ɵɵelementEnd();
} }
function InterviewListComponent_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5)(1, "div", 8);
    i0.ɵɵelement(2, "i", 9);
    i0.ɵɵelementStart(3, "h5", 10);
    i0.ɵɵtext(4, "No interviews yet");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p", 11);
    i0.ɵɵtext(6, "Start a mock interview generated from your resume \u2014 HR, Technical, Project-Based, or Behavioral.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "a", 2);
    i0.ɵɵtext(8, "Start Your First Interview");
    i0.ɵɵelementEnd()()();
} }
function InterviewListComponent_Conditional_9_For_2_Conditional_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 21);
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "span", 24);
    i0.ɵɵtext(3, "/100");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const i_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i_r1.overallScore);
} }
function InterviewListComponent_Conditional_9_For_2_Conditional_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 22);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2("", i_r1.answeredQuestions, " / ", i_r1.totalQuestions, " answered");
} }
function InterviewListComponent_Conditional_9_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 12)(1, "div", 13)(2, "div", 14)(3, "div", 15)(4, "h6", 16);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "span", 17);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "p", 18);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "p", 19);
    i0.ɵɵelement(11, "i", 20);
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(13, InterviewListComponent_Conditional_9_For_2_Conditional_13_Template, 4, 1, "div", 21)(14, InterviewListComponent_Conditional_9_For_2_Conditional_14_Template, 2, 2, "p", 22);
    i0.ɵɵelementStart(15, "a", 23);
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const i_r1 = ctx.$implicit;
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1("", i_r1.interviewType, " Interview");
    i0.ɵɵadvance();
    i0.ɵɵclassProp("text-bg-success", i_r1.status === "completed")("text-bg-warning", i_r1.status === "in-progress")("text-bg-secondary", i_r1.status !== "completed" && i_r1.status !== "in-progress");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i_r1.status);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Role: ", i_r1.jobRole || "Not specified");
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("bi-mic-fill", i_r1.mode === "voice")("bi-keyboard", i_r1.mode === "text");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i_r1.mode === "voice" ? "Voice interview" : "Text interview");
    i0.ɵɵadvance();
    i0.ɵɵconditional(i_r1.status === "completed" ? 13 : 14);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(17, _c0, i_r1._id));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i_r1.status === "completed" ? "View Report" : "Continue", " ");
} }
function InterviewListComponent_Conditional_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵrepeaterCreate(1, InterviewListComponent_Conditional_9_For_2_Template, 17, 19, "div", 12, _forTrack0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r1.interviews());
} }
export class InterviewListComponent {
    interviewService;
    interviews = signal([], ...(ngDevMode ? [{ debugName: "interviews" }] : []));
    loading = signal(true, ...(ngDevMode ? [{ debugName: "loading" }] : []));
    constructor(interviewService) {
        this.interviewService = interviewService;
    }
    ngOnInit() {
        this.interviewService.list().subscribe({
            next: (res) => this.interviews.set(res.data.interviews),
            complete: () => this.loading.set(false),
        });
    }
    static ɵfac = function InterviewListComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || InterviewListComponent)(i0.ɵɵdirectiveInject(i1.InterviewService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: InterviewListComponent, selectors: [["app-interview-list"]], decls: 10, vars: 1, consts: [[1, "d-flex", "justify-content-between", "align-items-center", "mb-3"], [1, "fw-bold", "mb-0"], ["routerLink", "/interview/new", 1, "btn", "btn-primary"], [1, "bi", "bi-plus-lg", "me-1"], [1, "text-center", "py-5"], [1, "card", "border-0", "shadow-sm"], [1, "row", "g-3"], [1, "spinner-border", "text-primary"], [1, "card-body", "text-center", "py-5"], [1, "bi", "bi-mic", "display-4", "text-primary"], [1, "mt-3"], [1, "text-muted"], [1, "col-md-6", "col-lg-4"], [1, "card", "border-0", "shadow-sm", "h-100"], [1, "card-body"], [1, "d-flex", "justify-content-between", "align-items-start", "mb-2"], [1, "fw-semibold", "mb-0"], [1, "badge"], [1, "small", "text-muted", "mb-1"], [1, "small", "text-muted", "mb-2"], [1, "bi"], [1, "fs-4", "fw-bold", "text-primary"], [1, "small", "mb-0"], [1, "btn", "btn-sm", "btn-outline-primary", "w-100", "mt-3", 3, "routerLink"], [1, "fs-6", "text-muted"]], template: function InterviewListComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div")(1, "div", 0)(2, "h3", 1);
            i0.ɵɵtext(3, "Mock Interviews");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "a", 2);
            i0.ɵɵelement(5, "i", 3);
            i0.ɵɵtext(6, " New Interview");
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(7, InterviewListComponent_Conditional_7_Template, 2, 0, "div", 4)(8, InterviewListComponent_Conditional_8_Template, 9, 0, "div", 5)(9, InterviewListComponent_Conditional_9_Template, 3, 0, "div", 6);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(7);
            i0.ɵɵconditional(ctx.loading() ? 7 : !ctx.interviews().length ? 8 : 9);
        } }, dependencies: [CommonModule, RouterLink], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InterviewListComponent, [{
        type: Component,
        args: [{ selector: 'app-interview-list', standalone: true, imports: [CommonModule, RouterLink], template: "<div>\n  <div class=\"d-flex justify-content-between align-items-center mb-3\">\n    <h3 class=\"fw-bold mb-0\">Mock Interviews</h3>\n    <a routerLink=\"/interview/new\" class=\"btn btn-primary\"><i class=\"bi bi-plus-lg me-1\"></i> New Interview</a>\n  </div>\n\n  @if (loading()) {\n    <div class=\"text-center py-5\"><div class=\"spinner-border text-primary\"></div></div>\n  } @else if (!interviews().length) {\n    <div class=\"card border-0 shadow-sm\">\n      <div class=\"card-body text-center py-5\">\n        <i class=\"bi bi-mic display-4 text-primary\"></i>\n        <h5 class=\"mt-3\">No interviews yet</h5>\n        <p class=\"text-muted\">Start a mock interview generated from your resume \u2014 HR, Technical, Project-Based, or Behavioral.</p>\n        <a routerLink=\"/interview/new\" class=\"btn btn-primary\">Start Your First Interview</a>\n      </div>\n    </div>\n  } @else {\n    <div class=\"row g-3\">\n      @for (i of interviews(); track i._id) {\n        <div class=\"col-md-6 col-lg-4\">\n          <div class=\"card border-0 shadow-sm h-100\">\n            <div class=\"card-body\">\n              <div class=\"d-flex justify-content-between align-items-start mb-2\">\n                <h6 class=\"fw-semibold mb-0\">{{ i.interviewType }} Interview</h6>\n                <span class=\"badge\" [class.text-bg-success]=\"i.status === 'completed'\" [class.text-bg-warning]=\"i.status === 'in-progress'\" [class.text-bg-secondary]=\"i.status !== 'completed' && i.status !== 'in-progress'\">{{ i.status }}</span>\n              </div>\n              <p class=\"small text-muted mb-1\">Role: {{ i.jobRole || 'Not specified' }}</p>\n              <p class=\"small text-muted mb-2\"><i class=\"bi\" [class.bi-mic-fill]=\"i.mode === 'voice'\" [class.bi-keyboard]=\"i.mode === 'text'\"></i> {{ i.mode === 'voice' ? 'Voice interview' : 'Text interview' }}</p>\n              @if (i.status === 'completed') {\n                <div class=\"fs-4 fw-bold text-primary\">{{ i.overallScore }}<span class=\"fs-6 text-muted\">/100</span></div>\n              } @else {\n                <p class=\"small mb-0\">{{ i.answeredQuestions }} / {{ i.totalQuestions }} answered</p>\n              }\n              <a [routerLink]=\"['/interview', i._id]\" class=\"btn btn-sm btn-outline-primary w-100 mt-3\">\n                {{ i.status === 'completed' ? 'View Report' : 'Continue' }}\n              </a>\n            </div>\n          </div>\n        </div>\n      }\n    </div>\n  }\n</div>\n" }]
    }], () => [{ type: i1.InterviewService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(InterviewListComponent, { className: "InterviewListComponent", filePath: "src/app/features/interview/list/interview-list.component.ts", lineNumber: 13 }); })();
