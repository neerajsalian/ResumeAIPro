import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import * as i0 from "@angular/core";
import * as i1 from "../../../core/services/resume.service";
import * as i2 from "../../../core/services/interview.service";
import * as i3 from "../../../core/services/auth.service";
import * as i4 from "@angular/router";
import * as i5 from "../../../core/services/toast.service";
import * as i6 from "@angular/forms";
const _forTrack0 = ($index, $item) => $item._id;
function InterviewSetupComponent_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵtext(1, "You need to upload a resume before starting an interview. ");
    i0.ɵɵelementStart(2, "a", 23);
    i0.ɵɵtext(3, "Upload one now");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, ".");
    i0.ɵɵelementEnd();
} }
function InterviewSetupComponent_For_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 8);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const r_r1 = ctx.$implicit;
    i0.ɵɵproperty("value", r_r1._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2("", r_r1.originalFileName, " (v", r_r1.version, ")");
} }
function InterviewSetupComponent_For_17_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 24);
    i0.ɵɵtwoWayListener("ngModelChange", function InterviewSetupComponent_For_17_Template_input_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.interviewType, $event) || (ctx_r2.interviewType = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(1, "label", 25);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const t_r4 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("id", "type-" + t_r4)("value", t_r4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.interviewType);
    i0.ɵɵadvance();
    i0.ɵɵproperty("for", "type-" + t_r4);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(t_r4);
} }
function InterviewSetupComponent_Conditional_40_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 21);
    i0.ɵɵtext(1, "Voice mode uses your browser's built-in speech recognition, which isn't supported in this browser. Try Chrome or Edge.");
    i0.ɵɵelementEnd();
} }
function InterviewSetupComponent_Conditional_42_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 26);
    i0.ɵɵtext(1, " Generating questions\u2026 ");
} }
function InterviewSetupComponent_Conditional_43_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " Start Interview ");
} }
export class InterviewSetupComponent {
    resumeService;
    interviewService;
    auth;
    router;
    toast;
    resumes = signal([], ...(ngDevMode ? [{ debugName: "resumes" }] : []));
    selectedResumeId = '';
    interviewType = 'Technical';
    jobRole = '';
    mode = 'text';
    questionCount = 6;
    creating = signal(false, ...(ngDevMode ? [{ debugName: "creating" }] : []));
    types = ['HR', 'Technical', 'Project-Based', 'Behavioral'];
    constructor(resumeService, interviewService, auth, router, toast) {
        this.resumeService = resumeService;
        this.interviewService = interviewService;
        this.auth = auth;
        this.router = router;
        this.toast = toast;
    }
    ngOnInit() {
        this.jobRole = this.auth.currentUser()?.targetJobRole || '';
        this.resumeService.list().subscribe((res) => {
            this.resumes.set(res.data.resumes);
            this.selectedResumeId = res.data.resumes[0]?._id || '';
        });
    }
    get voiceSupported() {
        return typeof window !== 'undefined' && 'webkitSpeechRecognition' in window;
    }
    start() {
        if (!this.selectedResumeId) {
            this.toast.show('Please upload a resume first', 'error');
            return;
        }
        this.creating.set(true);
        this.interviewService
            .create({
            resumeId: this.selectedResumeId,
            interviewType: this.interviewType,
            jobRole: this.jobRole,
            mode: this.mode,
            questionCount: this.questionCount,
        })
            .subscribe({
            next: (res) => this.router.navigate(['/interview', res.data.interview._id]),
            error: () => this.creating.set(false),
            complete: () => this.creating.set(false),
        });
    }
    static ɵfac = function InterviewSetupComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || InterviewSetupComponent)(i0.ɵɵdirectiveInject(i1.ResumeService), i0.ɵɵdirectiveInject(i2.InterviewService), i0.ɵɵdirectiveInject(i3.AuthService), i0.ɵɵdirectiveInject(i4.Router), i0.ɵɵdirectiveInject(i5.ToastService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: InterviewSetupComponent, selectors: [["app-interview-setup"]], decls: 44, vars: 11, consts: [[1, "mx-auto", 2, "max-width", "700px"], [1, "fw-bold", "mb-3"], [1, "card", "border-0", "shadow-sm"], [1, "card-body"], [1, "alert", "alert-warning", "small"], [1, "mb-3"], [1, "form-label", "small"], [1, "form-select", 3, "ngModelChange", "ngModel"], [3, "value"], ["role", "group", 1, "btn-group", "w-100"], ["type", "text", "placeholder", "e.g. Full Stack Developer", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "range", "min", "3", "max", "12", 1, "form-range", 3, "ngModelChange", "ngModel"], [1, "small", "text-muted", "text-center"], [1, "mb-4"], [1, "form-label", "small", "d-block"], ["type", "radio", "id", "mode-text", "value", "text", "name", "mode", 1, "btn-check", 3, "ngModelChange", "ngModel"], ["for", "mode-text", 1, "btn", "btn-outline-secondary"], [1, "bi", "bi-keyboard", "me-1"], ["type", "radio", "id", "mode-voice", "value", "voice", "name", "mode", 1, "btn-check", 3, "ngModelChange", "ngModel", "disabled"], ["for", "mode-voice", 1, "btn", "btn-outline-secondary"], [1, "bi", "bi-mic-fill", "me-1"], [1, "small", "text-muted", "mt-1", "mb-0"], [1, "btn", "btn-primary", "w-100", 3, "click", "disabled"], ["routerLink", "/resume"], ["type", "radio", "name", "interviewType", 1, "btn-check", 3, "ngModelChange", "id", "value", "ngModel"], [1, "btn", "btn-outline-primary", 3, "for"], [1, "spinner-border", "spinner-border-sm", "me-2"]], template: function InterviewSetupComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "h3", 1);
            i0.ɵɵtext(2, "Start a Mock Interview");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "div", 2)(4, "div", 3);
            i0.ɵɵconditionalCreate(5, InterviewSetupComponent_Conditional_5_Template, 5, 0, "div", 4);
            i0.ɵɵelementStart(6, "div", 5)(7, "label", 6);
            i0.ɵɵtext(8, "Resume");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "select", 7);
            i0.ɵɵtwoWayListener("ngModelChange", function InterviewSetupComponent_Template_select_ngModelChange_9_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.selectedResumeId, $event) || (ctx.selectedResumeId = $event); return $event; });
            i0.ɵɵrepeaterCreate(10, InterviewSetupComponent_For_11_Template, 2, 3, "option", 8, _forTrack0);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(12, "div", 5)(13, "label", 6);
            i0.ɵɵtext(14, "Interview Type");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "div", 9);
            i0.ɵɵrepeaterCreate(16, InterviewSetupComponent_For_17_Template, 3, 5, null, null, i0.ɵɵrepeaterTrackByIdentity);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(18, "div", 5)(19, "label", 6);
            i0.ɵɵtext(20, "Target Job Role");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(21, "input", 10);
            i0.ɵɵtwoWayListener("ngModelChange", function InterviewSetupComponent_Template_input_ngModelChange_21_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.jobRole, $event) || (ctx.jobRole = $event); return $event; });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(22, "div", 5)(23, "label", 6);
            i0.ɵɵtext(24, "Number of Questions");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(25, "input", 11);
            i0.ɵɵtwoWayListener("ngModelChange", function InterviewSetupComponent_Template_input_ngModelChange_25_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.questionCount, $event) || (ctx.questionCount = $event); return $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(26, "div", 12);
            i0.ɵɵtext(27);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(28, "div", 13)(29, "label", 14);
            i0.ɵɵtext(30, "Interview Mode");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(31, "div", 9)(32, "input", 15);
            i0.ɵɵtwoWayListener("ngModelChange", function InterviewSetupComponent_Template_input_ngModelChange_32_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.mode, $event) || (ctx.mode = $event); return $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(33, "label", 16);
            i0.ɵɵelement(34, "i", 17);
            i0.ɵɵtext(35, "Text");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(36, "input", 18);
            i0.ɵɵtwoWayListener("ngModelChange", function InterviewSetupComponent_Template_input_ngModelChange_36_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.mode, $event) || (ctx.mode = $event); return $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(37, "label", 19);
            i0.ɵɵelement(38, "i", 20);
            i0.ɵɵtext(39, "Voice");
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(40, InterviewSetupComponent_Conditional_40_Template, 2, 0, "p", 21);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(41, "button", 22);
            i0.ɵɵlistener("click", function InterviewSetupComponent_Template_button_click_41_listener() { return ctx.start(); });
            i0.ɵɵconditionalCreate(42, InterviewSetupComponent_Conditional_42_Template, 2, 0)(43, InterviewSetupComponent_Conditional_43_Template, 1, 0);
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(5);
            i0.ɵɵconditional(!ctx.resumes().length ? 5 : -1);
            i0.ɵɵadvance(4);
            i0.ɵɵtwoWayProperty("ngModel", ctx.selectedResumeId);
            i0.ɵɵadvance();
            i0.ɵɵrepeater(ctx.resumes());
            i0.ɵɵadvance(6);
            i0.ɵɵrepeater(ctx.types);
            i0.ɵɵadvance(5);
            i0.ɵɵtwoWayProperty("ngModel", ctx.jobRole);
            i0.ɵɵadvance(4);
            i0.ɵɵtwoWayProperty("ngModel", ctx.questionCount);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1("", ctx.questionCount, " questions");
            i0.ɵɵadvance(5);
            i0.ɵɵtwoWayProperty("ngModel", ctx.mode);
            i0.ɵɵadvance(4);
            i0.ɵɵtwoWayProperty("ngModel", ctx.mode);
            i0.ɵɵproperty("disabled", !ctx.voiceSupported);
            i0.ɵɵadvance(4);
            i0.ɵɵconditional(!ctx.voiceSupported ? 40 : -1);
            i0.ɵɵadvance();
            i0.ɵɵproperty("disabled", ctx.creating() || !ctx.resumes().length);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.creating() ? 42 : 43);
        } }, dependencies: [CommonModule, FormsModule, i6.NgSelectOption, i6.ɵNgSelectMultipleOption, i6.DefaultValueAccessor, i6.RangeValueAccessor, i6.SelectControlValueAccessor, i6.RadioControlValueAccessor, i6.NgControlStatus, i6.NgModel, RouterLink], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InterviewSetupComponent, [{
        type: Component,
        args: [{ selector: 'app-interview-setup', standalone: true, imports: [CommonModule, FormsModule, RouterLink], template: "<div class=\"mx-auto\" style=\"max-width: 700px;\">\n  <h3 class=\"fw-bold mb-3\">Start a Mock Interview</h3>\n\n  <div class=\"card border-0 shadow-sm\">\n    <div class=\"card-body\">\n      @if (!resumes().length) {\n        <div class=\"alert alert-warning small\">You need to upload a resume before starting an interview. <a routerLink=\"/resume\">Upload one now</a>.</div>\n      }\n\n      <div class=\"mb-3\">\n        <label class=\"form-label small\">Resume</label>\n        <select class=\"form-select\" [(ngModel)]=\"selectedResumeId\">\n          @for (r of resumes(); track r._id) {\n            <option [value]=\"r._id\">{{ r.originalFileName }} (v{{ r.version }})</option>\n          }\n        </select>\n      </div>\n\n      <div class=\"mb-3\">\n        <label class=\"form-label small\">Interview Type</label>\n        <div class=\"btn-group w-100\" role=\"group\">\n          @for (t of types; track t) {\n            <input type=\"radio\" class=\"btn-check\" [id]=\"'type-' + t\" [value]=\"t\" [(ngModel)]=\"interviewType\" name=\"interviewType\" />\n            <label class=\"btn btn-outline-primary\" [for]=\"'type-' + t\">{{ t }}</label>\n          }\n        </div>\n      </div>\n\n      <div class=\"mb-3\">\n        <label class=\"form-label small\">Target Job Role</label>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"jobRole\" placeholder=\"e.g. Full Stack Developer\" />\n      </div>\n\n      <div class=\"mb-3\">\n        <label class=\"form-label small\">Number of Questions</label>\n        <input type=\"range\" class=\"form-range\" min=\"3\" max=\"12\" [(ngModel)]=\"questionCount\" />\n        <div class=\"small text-muted text-center\">{{ questionCount }} questions</div>\n      </div>\n\n      <div class=\"mb-4\">\n        <label class=\"form-label small d-block\">Interview Mode</label>\n        <div class=\"btn-group w-100\" role=\"group\">\n          <input type=\"radio\" class=\"btn-check\" id=\"mode-text\" value=\"text\" [(ngModel)]=\"mode\" name=\"mode\" />\n          <label class=\"btn btn-outline-secondary\" for=\"mode-text\"><i class=\"bi bi-keyboard me-1\"></i>Text</label>\n\n          <input type=\"radio\" class=\"btn-check\" id=\"mode-voice\" value=\"voice\" [(ngModel)]=\"mode\" name=\"mode\" [disabled]=\"!voiceSupported\" />\n          <label class=\"btn btn-outline-secondary\" for=\"mode-voice\"><i class=\"bi bi-mic-fill me-1\"></i>Voice</label>\n        </div>\n        @if (!voiceSupported) {\n          <p class=\"small text-muted mt-1 mb-0\">Voice mode uses your browser's built-in speech recognition, which isn't supported in this browser. Try Chrome or Edge.</p>\n        }\n      </div>\n\n      <button class=\"btn btn-primary w-100\" (click)=\"start()\" [disabled]=\"creating() || !resumes().length\">\n        @if (creating()) { <span class=\"spinner-border spinner-border-sm me-2\"></span> Generating questions\u2026 } @else { Start Interview }\n      </button>\n    </div>\n  </div>\n</div>\n" }]
    }], () => [{ type: i1.ResumeService }, { type: i2.InterviewService }, { type: i3.AuthService }, { type: i4.Router }, { type: i5.ToastService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(InterviewSetupComponent, { className: "InterviewSetupComponent", filePath: "src/app/features/interview/setup/interview-setup.component.ts", lineNumber: 17 }); })();
