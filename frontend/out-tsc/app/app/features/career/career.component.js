import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../../core/services/resume.service";
import * as i3 from "../../core/services/career.service";
import * as i4 from "../../core/services/auth.service";
import * as i5 from "../../core/services/toast.service";
import * as i6 from "@angular/forms";
const _forTrack0 = ($index, $item) => $item._id;
function CareerComponent_For_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 7);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const r_r1 = ctx.$implicit;
    i0.ɵɵproperty("value", r_r1._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(r_r1.originalFileName);
} }
function CareerComponent_Conditional_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 11);
} }
function CareerComponent_Conditional_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " Get Guidance ");
} }
function CareerComponent_Conditional_20_For_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const p_r2 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(p_r2);
} }
function CareerComponent_Conditional_20_For_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const c_r3 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(c_r3);
} }
function CareerComponent_Conditional_20_For_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const c_r4 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(c_r4);
} }
function CareerComponent_Conditional_20_For_36_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 22);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const s_r5 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(s_r5);
} }
function CareerComponent_Conditional_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 12)(1, "div", 13)(2, "div", 14)(3, "div", 2)(4, "h6", 15);
    i0.ɵɵelement(5, "i", 16);
    i0.ɵɵtext(6, "Recommended Career Paths");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "ul", 17);
    i0.ɵɵrepeaterCreate(8, CareerComponent_Conditional_20_For_9_Template, 2, 1, "li", null, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(10, "div", 13)(11, "div", 14)(12, "div", 2)(13, "h6", 15);
    i0.ɵɵelement(14, "i", 18);
    i0.ɵɵtext(15, "Suggested Certifications");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "ul", 17);
    i0.ɵɵrepeaterCreate(17, CareerComponent_Conditional_20_For_18_Template, 2, 1, "li", null, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(19, "div", 13)(20, "div", 14)(21, "div", 2)(22, "h6", 15);
    i0.ɵɵelement(23, "i", 19);
    i0.ɵɵtext(24, "Recommended Courses");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "ul", 17);
    i0.ɵɵrepeaterCreate(26, CareerComponent_Conditional_20_For_27_Template, 2, 1, "li", null, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(28, "div", 13)(29, "div", 14)(30, "div", 2)(31, "h6", 15);
    i0.ɵɵelement(32, "i", 20);
    i0.ɵɵtext(33, "Missing Skills for Target Job");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(34, "div", 21);
    i0.ɵɵrepeaterCreate(35, CareerComponent_Conditional_20_For_36_Template, 2, 1, "span", 22, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const g_r6 = ctx;
    i0.ɵɵadvance(8);
    i0.ɵɵrepeater(g_r6.recommendedCareerPaths);
    i0.ɵɵadvance(9);
    i0.ɵɵrepeater(g_r6.suggestedCertifications);
    i0.ɵɵadvance(9);
    i0.ɵɵrepeater(g_r6.recommendedCourses);
    i0.ɵɵadvance(9);
    i0.ɵɵrepeater(g_r6.missingSkillsForTargetJob);
} }
export class CareerComponent {
    route;
    resumeService;
    careerService;
    auth;
    toast;
    resumes = signal([], ...(ngDevMode ? [{ debugName: "resumes" }] : []));
    selectedResumeId = '';
    targetJobRole = '';
    loading = signal(false, ...(ngDevMode ? [{ debugName: "loading" }] : []));
    guidance = signal(null, ...(ngDevMode ? [{ debugName: "guidance" }] : []));
    constructor(route, resumeService, careerService, auth, toast) {
        this.route = route;
        this.resumeService = resumeService;
        this.careerService = careerService;
        this.auth = auth;
        this.toast = toast;
    }
    ngOnInit() {
        this.targetJobRole = this.auth.currentUser()?.targetJobRole || '';
        this.resumeService.list().subscribe((res) => {
            this.resumes.set(res.data.resumes);
            const fromQuery = this.route.snapshot.queryParamMap.get('resumeId');
            this.selectedResumeId = fromQuery || res.data.resumes[0]?._id || '';
        });
    }
    getGuidance() {
        if (!this.selectedResumeId) {
            this.toast.show('Please select a resume first', 'error');
            return;
        }
        this.loading.set(true);
        this.careerService.getGuidance(this.selectedResumeId, this.targetJobRole).subscribe({
            next: (res) => this.guidance.set(res.data.guidance),
            error: () => this.loading.set(false),
            complete: () => this.loading.set(false),
        });
    }
    static ɵfac = function CareerComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CareerComponent)(i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(i2.ResumeService), i0.ɵɵdirectiveInject(i3.CareerService), i0.ɵɵdirectiveInject(i4.AuthService), i0.ɵɵdirectiveInject(i5.ToastService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CareerComponent, selectors: [["app-career"]], decls: 21, vars: 5, consts: [[1, "fw-bold", "mb-3"], [1, "card", "border-0", "shadow-sm", "mb-4"], [1, "card-body"], [1, "row", "g-3", "align-items-end"], [1, "col-md-5"], [1, "form-label", "small"], [1, "form-select", 3, "ngModelChange", "ngModel"], [3, "value"], ["type", "text", "placeholder", "e.g. Data Scientist", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "col-md-2"], [1, "btn", "btn-primary", "w-100", 3, "click", "disabled"], [1, "spinner-border", "spinner-border-sm"], [1, "row", "g-3"], [1, "col-md-6"], [1, "card", "border-0", "shadow-sm", "h-100"], [1, "text-muted", "mb-2"], [1, "bi", "bi-signpost-2", "text-primary", "me-1"], [1, "ps-3"], [1, "bi", "bi-patch-check", "text-success", "me-1"], [1, "bi", "bi-mortarboard", "text-info", "me-1"], [1, "bi", "bi-exclamation-triangle", "text-warning", "me-1"], [1, "d-flex", "flex-wrap", "gap-1"], [1, "badge", "text-bg-warning-subtle", "text-warning-emphasis", "border"]], template: function CareerComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div")(1, "h3", 0);
            i0.ɵɵtext(2, "AI Career Guidance");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "div", 1)(4, "div", 2)(5, "div", 3)(6, "div", 4)(7, "label", 5);
            i0.ɵɵtext(8, "Resume");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "select", 6);
            i0.ɵɵtwoWayListener("ngModelChange", function CareerComponent_Template_select_ngModelChange_9_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.selectedResumeId, $event) || (ctx.selectedResumeId = $event); return $event; });
            i0.ɵɵrepeaterCreate(10, CareerComponent_For_11_Template, 2, 2, "option", 7, _forTrack0);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(12, "div", 4)(13, "label", 5);
            i0.ɵɵtext(14, "Target Job Role");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "input", 8);
            i0.ɵɵtwoWayListener("ngModelChange", function CareerComponent_Template_input_ngModelChange_15_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.targetJobRole, $event) || (ctx.targetJobRole = $event); return $event; });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(16, "div", 9)(17, "button", 10);
            i0.ɵɵlistener("click", function CareerComponent_Template_button_click_17_listener() { return ctx.getGuidance(); });
            i0.ɵɵconditionalCreate(18, CareerComponent_Conditional_18_Template, 1, 0, "span", 11)(19, CareerComponent_Conditional_19_Template, 1, 0);
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵconditionalCreate(20, CareerComponent_Conditional_20_Template, 37, 0, "div", 12);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            let tmp_5_0;
            i0.ɵɵadvance(9);
            i0.ɵɵtwoWayProperty("ngModel", ctx.selectedResumeId);
            i0.ɵɵadvance();
            i0.ɵɵrepeater(ctx.resumes());
            i0.ɵɵadvance(5);
            i0.ɵɵtwoWayProperty("ngModel", ctx.targetJobRole);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("disabled", ctx.loading());
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.loading() ? 18 : 19);
            i0.ɵɵadvance(2);
            i0.ɵɵconditional((tmp_5_0 = ctx.guidance()) ? 20 : -1, tmp_5_0);
        } }, dependencies: [CommonModule, FormsModule, i6.NgSelectOption, i6.ɵNgSelectMultipleOption, i6.DefaultValueAccessor, i6.SelectControlValueAccessor, i6.NgControlStatus, i6.NgModel], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CareerComponent, [{
        type: Component,
        args: [{ selector: 'app-career', standalone: true, imports: [CommonModule, FormsModule], template: "<div>\n  <h3 class=\"fw-bold mb-3\">AI Career Guidance</h3>\n\n  <div class=\"card border-0 shadow-sm mb-4\">\n    <div class=\"card-body\">\n      <div class=\"row g-3 align-items-end\">\n        <div class=\"col-md-5\">\n          <label class=\"form-label small\">Resume</label>\n          <select class=\"form-select\" [(ngModel)]=\"selectedResumeId\">\n            @for (r of resumes(); track r._id) { <option [value]=\"r._id\">{{ r.originalFileName }}</option> }\n          </select>\n        </div>\n        <div class=\"col-md-5\">\n          <label class=\"form-label small\">Target Job Role</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"targetJobRole\" placeholder=\"e.g. Data Scientist\" />\n        </div>\n        <div class=\"col-md-2\">\n          <button class=\"btn btn-primary w-100\" (click)=\"getGuidance()\" [disabled]=\"loading()\">\n            @if (loading()) { <span class=\"spinner-border spinner-border-sm\"></span> } @else { Get Guidance }\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  @if (guidance(); as g) {\n    <div class=\"row g-3\">\n      <div class=\"col-md-6\">\n        <div class=\"card border-0 shadow-sm h-100\"><div class=\"card-body\">\n          <h6 class=\"text-muted mb-2\"><i class=\"bi bi-signpost-2 text-primary me-1\"></i>Recommended Career Paths</h6>\n          <ul class=\"ps-3\">@for (p of g.recommendedCareerPaths; track p) { <li>{{ p }}</li> }</ul>\n        </div></div>\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"card border-0 shadow-sm h-100\"><div class=\"card-body\">\n          <h6 class=\"text-muted mb-2\"><i class=\"bi bi-patch-check text-success me-1\"></i>Suggested Certifications</h6>\n          <ul class=\"ps-3\">@for (c of g.suggestedCertifications; track c) { <li>{{ c }}</li> }</ul>\n        </div></div>\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"card border-0 shadow-sm h-100\"><div class=\"card-body\">\n          <h6 class=\"text-muted mb-2\"><i class=\"bi bi-mortarboard text-info me-1\"></i>Recommended Courses</h6>\n          <ul class=\"ps-3\">@for (c of g.recommendedCourses; track c) { <li>{{ c }}</li> }</ul>\n        </div></div>\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"card border-0 shadow-sm h-100\"><div class=\"card-body\">\n          <h6 class=\"text-muted mb-2\"><i class=\"bi bi-exclamation-triangle text-warning me-1\"></i>Missing Skills for Target Job</h6>\n          <div class=\"d-flex flex-wrap gap-1\">\n            @for (s of g.missingSkillsForTargetJob; track s) { <span class=\"badge text-bg-warning-subtle text-warning-emphasis border\">{{ s }}</span> }\n          </div>\n        </div></div>\n      </div>\n    </div>\n  }\n</div>\n" }]
    }], () => [{ type: i1.ActivatedRoute }, { type: i2.ResumeService }, { type: i3.CareerService }, { type: i4.AuthService }, { type: i5.ToastService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CareerComponent, { className: "CareerComponent", filePath: "src/app/features/career/career.component.ts", lineNumber: 17 }); })();
