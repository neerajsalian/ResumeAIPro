import { Component, signal, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Chart, registerables } from 'chart.js';
import { ScoreGaugeComponent } from '../../../shared/components/score-gauge/score-gauge.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../../../core/services/resume.service";
import * as i3 from "../../../core/services/report.service";
import * as i4 from "../../../core/services/toast.service";
import * as i5 from "@angular/forms";
import * as i6 from "@angular/common";
const _c0 = ["skillsChart"];
const _c1 = () => ["/job-match"];
const _c2 = a0 => ({ resumeId: a0 });
const _c3 = () => ["/career"];
function ResumeDetailComponent_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵelement(1, "div", 4);
    i0.ɵɵelementEnd();
} }
function ResumeDetailComponent_Conditional_5_Conditional_14_Conditional_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 23);
    i0.ɵɵtext(1, " Analyzing\u2026 ");
} }
function ResumeDetailComponent_Conditional_5_Conditional_14_Conditional_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " Run Analysis ");
} }
function ResumeDetailComponent_Conditional_5_Conditional_14_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 13)(1, "div", 15);
    i0.ɵɵelement(2, "i", 16);
    i0.ɵɵelementStart(3, "h5", 17);
    i0.ɵɵtext(4, "Run AI Analysis");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p", 18);
    i0.ɵɵtext(6, "Get your ATS score, resume strength score, skill breakdown, and improvement suggestions.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 19)(8, "div", 20)(9, "input", 21);
    i0.ɵɵtwoWayListener("ngModelChange", function ResumeDetailComponent_Conditional_5_Conditional_14_Template_input_ngModelChange_9_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.targetJobRole, $event) || (ctx_r1.targetJobRole = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(10, "button", 22);
    i0.ɵɵlistener("click", function ResumeDetailComponent_Conditional_5_Conditional_14_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.runAnalysis()); });
    i0.ɵɵconditionalCreate(11, ResumeDetailComponent_Conditional_5_Conditional_14_Conditional_11_Template, 2, 0)(12, ResumeDetailComponent_Conditional_5_Conditional_14_Conditional_12_Template, 1, 0);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(9);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.targetJobRole);
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r1.analyzing());
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.analyzing() ? 11 : 12);
} }
function ResumeDetailComponent_Conditional_5_Conditional_15_Conditional_36_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 51);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const s_r4 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(s_r4);
} }
function ResumeDetailComponent_Conditional_5_Conditional_15_Conditional_36_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 44);
    i0.ɵɵrepeaterCreate(1, ResumeDetailComponent_Conditional_5_Conditional_15_Conditional_36_For_2_Template, 2, 1, "span", 51, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r1.analysis().missingSkills);
} }
function ResumeDetailComponent_Conditional_5_Conditional_15_Conditional_37_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 45);
    i0.ɵɵtext(1, "None detected.");
    i0.ɵɵelementEnd();
} }
function ResumeDetailComponent_Conditional_5_Conditional_15_Conditional_44_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 52);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const k_r5 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(k_r5);
} }
function ResumeDetailComponent_Conditional_5_Conditional_15_Conditional_44_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 44);
    i0.ɵɵrepeaterCreate(1, ResumeDetailComponent_Conditional_5_Conditional_15_Conditional_44_For_2_Template, 2, 1, "span", 52, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r1.analysis().missingKeywords);
} }
function ResumeDetailComponent_Conditional_5_Conditional_15_Conditional_45_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 45);
    i0.ɵɵtext(1, "None detected.");
    i0.ɵɵelementEnd();
} }
function ResumeDetailComponent_Conditional_5_Conditional_15_For_54_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const s_r6 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(s_r6);
} }
function ResumeDetailComponent_Conditional_5_Conditional_15_For_63_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const s_r7 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(s_r7);
} }
function ResumeDetailComponent_Conditional_5_Conditional_15_For_71_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const s_r8 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(s_r8);
} }
function ResumeDetailComponent_Conditional_5_Conditional_15_For_79_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const s_r9 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(s_r9);
} }
function ResumeDetailComponent_Conditional_5_Conditional_15_For_87_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const s_r10 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(s_r10);
} }
function ResumeDetailComponent_Conditional_5_Conditional_15_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 24)(1, "button", 25);
    i0.ɵɵlistener("click", function ResumeDetailComponent_Conditional_5_Conditional_15_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.runAnalysis()); });
    i0.ɵɵelement(2, "i", 26);
    i0.ɵɵtext(3, "Re-analyze ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 27);
    i0.ɵɵlistener("click", function ResumeDetailComponent_Conditional_5_Conditional_15_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.downloadReport()); });
    i0.ɵɵelement(5, "i", 28);
    i0.ɵɵtext(6, "Download PDF Report");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "div", 29)(8, "div", 30)(9, "div", 31)(10, "div", 32);
    i0.ɵɵelement(11, "app-score-gauge", 33);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(12, "div", 30)(13, "div", 31)(14, "div", 32);
    i0.ɵɵelement(15, "app-score-gauge", 34);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(16, "div", 35)(17, "div", 31)(18, "div", 36)(19, "h6", 37);
    i0.ɵɵtext(20, "Summary");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "p", 38);
    i0.ɵɵtext(22);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(23, "div", 39)(24, "div", 36)(25, "h6", 40);
    i0.ɵɵtext(26, "Skill Analysis");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(27, "canvas", 41, 0);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(29, "div", 42)(30, "div", 35)(31, "div", 31)(32, "div", 36)(33, "h6", 37);
    i0.ɵɵelement(34, "i", 43);
    i0.ɵɵtext(35, "Missing Skills");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(36, ResumeDetailComponent_Conditional_5_Conditional_15_Conditional_36_Template, 3, 0, "div", 44)(37, ResumeDetailComponent_Conditional_5_Conditional_15_Conditional_37_Template, 2, 0, "p", 45);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(38, "div", 35)(39, "div", 31)(40, "div", 36)(41, "h6", 37);
    i0.ɵɵelement(42, "i", 46);
    i0.ɵɵtext(43, "Missing Keywords");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(44, ResumeDetailComponent_Conditional_5_Conditional_15_Conditional_44_Template, 3, 0, "div", 44)(45, ResumeDetailComponent_Conditional_5_Conditional_15_Conditional_45_Template, 2, 0, "p", 45);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(46, "div", 35)(47, "div", 31)(48, "div", 36)(49, "h6", 37);
    i0.ɵɵelement(50, "i", 47);
    i0.ɵɵtext(51, "Strengths");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(52, "ul", 48);
    i0.ɵɵrepeaterCreate(53, ResumeDetailComponent_Conditional_5_Conditional_15_For_54_Template, 2, 1, "li", null, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(55, "div", 35)(56, "div", 31)(57, "div", 36)(58, "h6", 37);
    i0.ɵɵelement(59, "i", 49);
    i0.ɵɵtext(60, "Weaknesses");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(61, "ul", 48);
    i0.ɵɵrepeaterCreate(62, ResumeDetailComponent_Conditional_5_Conditional_15_For_63_Template, 2, 1, "li", null, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(64, "div", 50)(65, "div", 31)(66, "div", 36)(67, "h6", 37);
    i0.ɵɵtext(68, "Grammar Suggestions");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(69, "ul", 48);
    i0.ɵɵrepeaterCreate(70, ResumeDetailComponent_Conditional_5_Conditional_15_For_71_Template, 2, 1, "li", null, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(72, "div", 50)(73, "div", 31)(74, "div", 36)(75, "h6", 37);
    i0.ɵɵtext(76, "Formatting Suggestions");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(77, "ul", 48);
    i0.ɵɵrepeaterCreate(78, ResumeDetailComponent_Conditional_5_Conditional_15_For_79_Template, 2, 1, "li", null, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(80, "div", 50)(81, "div", 31)(82, "div", 36)(83, "h6", 37);
    i0.ɵɵtext(84, "Improvement Recommendations");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(85, "ul", 48);
    i0.ɵɵrepeaterCreate(86, ResumeDetailComponent_Conditional_5_Conditional_15_For_87_Template, 2, 1, "li", null, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    let tmp_8_0;
    let tmp_9_0;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r1.analyzing());
    i0.ɵɵadvance(10);
    i0.ɵɵproperty("value", ctx_r1.analysis().atsScore);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("value", ctx_r1.analysis().resumeStrengthScore);
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(ctx_r1.analysis().summary);
    i0.ɵɵadvance(14);
    i0.ɵɵconditional(((tmp_8_0 = ctx_r1.analysis().missingSkills) == null ? null : tmp_8_0.length) ? 36 : 37);
    i0.ɵɵadvance(8);
    i0.ɵɵconditional(((tmp_9_0 = ctx_r1.analysis().missingKeywords) == null ? null : tmp_9_0.length) ? 44 : 45);
    i0.ɵɵadvance(9);
    i0.ɵɵrepeater(ctx_r1.analysis().strengths);
    i0.ɵɵadvance(9);
    i0.ɵɵrepeater(ctx_r1.analysis().weaknesses);
    i0.ɵɵadvance(8);
    i0.ɵɵrepeater(ctx_r1.analysis().grammarSuggestions);
    i0.ɵɵadvance(8);
    i0.ɵɵrepeater(ctx_r1.analysis().formattingSuggestions);
    i0.ɵɵadvance(8);
    i0.ɵɵrepeater(ctx_r1.analysis().improvementRecommendations);
} }
function ResumeDetailComponent_Conditional_5_Conditional_16_For_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const p_r11 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(p_r11);
} }
function ResumeDetailComponent_Conditional_5_Conditional_16_For_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r12 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i_r12);
} }
function ResumeDetailComponent_Conditional_5_Conditional_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 14)(1, "div", 36)(2, "h6", 40);
    i0.ɵɵtext(3, "Deterministic ATS Parsing Checks");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 53)(5, "div", 35)(6, "p", 54);
    i0.ɵɵtext(7, "Passed");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "ul", 55);
    i0.ɵɵrepeaterCreate(9, ResumeDetailComponent_Conditional_5_Conditional_16_For_10_Template, 2, 1, "li", null, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "div", 35)(12, "p", 56);
    i0.ɵɵtext(13, "Issues");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "ul", 55);
    i0.ɵɵrepeaterCreate(15, ResumeDetailComponent_Conditional_5_Conditional_16_For_16_Template, 2, 1, "li", null, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const checks_r13 = ctx;
    i0.ɵɵadvance(9);
    i0.ɵɵrepeater(checks_r13.passed);
    i0.ɵɵadvance(6);
    i0.ɵɵrepeater(checks_r13.issues);
} }
function ResumeDetailComponent_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5)(1, "div")(2, "h3", 6);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p", 7);
    i0.ɵɵtext(5);
    i0.ɵɵpipe(6, "date");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "div", 8)(8, "a", 9);
    i0.ɵɵelement(9, "i", 10);
    i0.ɵɵtext(10, "Match to Job");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "a", 11);
    i0.ɵɵelement(12, "i", 12);
    i0.ɵɵtext(13, "Career Guidance");
    i0.ɵɵelementEnd()()();
    i0.ɵɵconditionalCreate(14, ResumeDetailComponent_Conditional_5_Conditional_14_Template, 13, 3, "div", 13)(15, ResumeDetailComponent_Conditional_5_Conditional_15_Template, 88, 6);
    i0.ɵɵconditionalCreate(16, ResumeDetailComponent_Conditional_5_Conditional_16_Template, 17, 0, "div", 14);
} if (rf & 2) {
    let tmp_9_0;
    const r_r14 = ctx;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(r_r14.originalFileName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("Version ", r_r14.version, " \u00B7 Uploaded ", i0.ɵɵpipeBind2(6, 9, r_r14.createdAt, "medium"));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction0(12, _c1))("queryParams", i0.ɵɵpureFunction1(13, _c2, r_r14._id));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction0(15, _c3))("queryParams", i0.ɵɵpureFunction1(16, _c2, r_r14._id));
    i0.ɵɵadvance(3);
    i0.ɵɵconditional(!ctx_r1.analysis() ? 14 : 15);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional((tmp_9_0 = ctx_r1.atsChecks()) ? 16 : -1, tmp_9_0);
} }
Chart.register(...registerables);
export class ResumeDetailComponent {
    route;
    resumeService;
    reportService;
    toast;
    skillsChartRef;
    resumeId = '';
    resume = signal(null, ...(ngDevMode ? [{ debugName: "resume" }] : []));
    analysis = signal(null, ...(ngDevMode ? [{ debugName: "analysis" }] : []));
    atsChecks = signal(null, ...(ngDevMode ? [{ debugName: "atsChecks" }] : []));
    analyzing = signal(false, ...(ngDevMode ? [{ debugName: "analyzing" }] : []));
    loading = signal(true, ...(ngDevMode ? [{ debugName: "loading" }] : []));
    targetJobRole = '';
    chart = null;
    constructor(route, resumeService, reportService, toast) {
        this.route = route;
        this.resumeService = resumeService;
        this.reportService = reportService;
        this.toast = toast;
    }
    ngOnInit() {
        this.resumeId = this.route.snapshot.paramMap.get('id') || '';
        this.resumeService.get(this.resumeId).subscribe((res) => {
            this.resume.set(res.data.resume);
            this.loading.set(false);
        });
        this.loadAnalysis();
        this.resumeService.runAtsChecks(this.resumeId).subscribe({
            next: (res) => this.atsChecks.set(res.data),
            error: () => { },
        });
    }
    ngAfterViewInit() { }
    loadAnalysis() {
        this.resumeService.getLatestAnalysis(this.resumeId).subscribe({
            next: (res) => {
                this.analysis.set(res.data.analysis);
                setTimeout(() => this.renderChart(), 0);
            },
            error: () => { },
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
        if (!a || !this.skillsChartRef)
            return;
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
        if (!a)
            return;
        this.reportService.generateResumeReport(a._id).subscribe((res) => {
            window.open(this.reportService.downloadUrl(res.data.report._id), '_blank');
        });
    }
    static ɵfac = function ResumeDetailComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ResumeDetailComponent)(i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(i2.ResumeService), i0.ɵɵdirectiveInject(i3.ReportService), i0.ɵɵdirectiveInject(i4.ToastService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ResumeDetailComponent, selectors: [["app-resume-detail"]], viewQuery: function ResumeDetailComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.skillsChartRef = _t.first);
        } }, decls: 6, vars: 1, consts: [["skillsChart", ""], ["routerLink", "/resume", 1, "text-decoration-none", "small", "mb-2", "d-inline-block"], [1, "bi", "bi-arrow-left", "me-1"], [1, "text-center", "py-5"], [1, "spinner-border", "text-primary"], [1, "d-flex", "justify-content-between", "align-items-start", "flex-wrap", "gap-2", "mb-4"], [1, "fw-bold", "mb-0"], [1, "text-muted", "mb-0"], [1, "d-flex", "gap-2"], [1, "btn", "btn-outline-primary", 3, "routerLink", "queryParams"], [1, "bi", "bi-bullseye", "me-1"], [1, "btn", "btn-outline-secondary", 3, "routerLink", "queryParams"], [1, "bi", "bi-signpost-2", "me-1"], [1, "card", "border-0", "shadow-sm"], [1, "card", "border-0", "shadow-sm", "mt-3"], [1, "card-body", "text-center", "py-5"], [1, "bi", "bi-stars", "display-4", "text-primary"], [1, "mt-3"], [1, "text-muted"], [1, "row", "justify-content-center"], [1, "col-md-5"], ["type", "text", "placeholder", "Target job role (optional)", "name", "targetJobRole", 1, "form-control", "mb-3", 3, "ngModelChange", "ngModel"], [1, "btn", "btn-primary", "px-4", 3, "click", "disabled"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "d-flex", "justify-content-end", "mb-2"], [1, "btn", "btn-sm", "btn-outline-secondary", "me-2", 3, "click", "disabled"], [1, "bi", "bi-arrow-repeat", "me-1"], [1, "btn", "btn-sm", "btn-primary", 3, "click"], [1, "bi", "bi-file-earmark-pdf", "me-1"], [1, "row", "g-3", "mb-3"], [1, "col-md-3"], [1, "card", "border-0", "shadow-sm", "h-100"], [1, "card-body", "text-center"], ["label", "ATS Score", 3, "value"], ["label", "Resume Strength", 3, "value"], [1, "col-md-6"], [1, "card-body"], [1, "text-muted", "mb-2"], [1, "mb-0", "small"], [1, "card", "border-0", "shadow-sm", "mb-3"], [1, "text-muted", "mb-3"], ["height", "90"], [1, "row", "g-3"], [1, "bi", "bi-exclamation-triangle", "text-warning", "me-1"], [1, "d-flex", "flex-wrap", "gap-1"], [1, "small", "text-muted", "mb-0"], [1, "bi", "bi-key", "text-info", "me-1"], [1, "bi", "bi-check-circle", "text-success", "me-1"], [1, "small", "mb-0", "ps-3"], [1, "bi", "bi-x-circle", "text-danger", "me-1"], [1, "col-md-4"], [1, "badge", "text-bg-warning-subtle", "text-warning-emphasis", "border"], [1, "badge", "text-bg-info-subtle", "text-info-emphasis", "border"], [1, "row"], [1, "small", "fw-semibold", "text-success", "mb-2"], [1, "small", "ps-3"], [1, "small", "fw-semibold", "text-danger", "mb-2"]], template: function ResumeDetailComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div")(1, "a", 1);
            i0.ɵɵelement(2, "i", 2);
            i0.ɵɵtext(3, "Back to resumes");
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(4, ResumeDetailComponent_Conditional_4_Template, 2, 0, "div", 3)(5, ResumeDetailComponent_Conditional_5_Template, 17, 18);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            let tmp_0_0;
            i0.ɵɵadvance(4);
            i0.ɵɵconditional(ctx.loading() ? 4 : (tmp_0_0 = ctx.resume()) ? 5 : -1, tmp_0_0);
        } }, dependencies: [CommonModule, FormsModule, i5.DefaultValueAccessor, i5.NgControlStatus, i5.NgModel, RouterLink, ScoreGaugeComponent, i6.DatePipe], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ResumeDetailComponent, [{
        type: Component,
        args: [{ selector: 'app-resume-detail', standalone: true, imports: [CommonModule, FormsModule, RouterLink, ScoreGaugeComponent], template: "<div>\n  <a routerLink=\"/resume\" class=\"text-decoration-none small mb-2 d-inline-block\"><i class=\"bi bi-arrow-left me-1\"></i>Back to resumes</a>\n\n  @if (loading()) {\n    <div class=\"text-center py-5\"><div class=\"spinner-border text-primary\"></div></div>\n  } @else if (resume(); as r) {\n    <div class=\"d-flex justify-content-between align-items-start flex-wrap gap-2 mb-4\">\n      <div>\n        <h3 class=\"fw-bold mb-0\">{{ r.originalFileName }}</h3>\n        <p class=\"text-muted mb-0\">Version {{ r.version }} \u00B7 Uploaded {{ r.createdAt | date: 'medium' }}</p>\n      </div>\n      <div class=\"d-flex gap-2\">\n        <a [routerLink]=\"['/job-match']\" [queryParams]=\"{ resumeId: r._id }\" class=\"btn btn-outline-primary\"><i class=\"bi bi-bullseye me-1\"></i>Match to Job</a>\n        <a [routerLink]=\"['/career']\" [queryParams]=\"{ resumeId: r._id }\" class=\"btn btn-outline-secondary\"><i class=\"bi bi-signpost-2 me-1\"></i>Career Guidance</a>\n      </div>\n    </div>\n\n    @if (!analysis()) {\n      <div class=\"card border-0 shadow-sm\">\n        <div class=\"card-body text-center py-5\">\n          <i class=\"bi bi-stars display-4 text-primary\"></i>\n          <h5 class=\"mt-3\">Run AI Analysis</h5>\n          <p class=\"text-muted\">Get your ATS score, resume strength score, skill breakdown, and improvement suggestions.</p>\n          <div class=\"row justify-content-center\">\n            <div class=\"col-md-5\">\n              <input type=\"text\" class=\"form-control mb-3\" placeholder=\"Target job role (optional)\" [(ngModel)]=\"targetJobRole\" name=\"targetJobRole\" />\n            </div>\n          </div>\n          <button class=\"btn btn-primary px-4\" (click)=\"runAnalysis()\" [disabled]=\"analyzing()\">\n            @if (analyzing()) { <span class=\"spinner-border spinner-border-sm me-2\"></span> Analyzing\u2026 } @else { Run Analysis }\n          </button>\n        </div>\n      </div>\n    } @else {\n      <div class=\"d-flex justify-content-end mb-2\">\n        <button class=\"btn btn-sm btn-outline-secondary me-2\" (click)=\"runAnalysis()\" [disabled]=\"analyzing()\">\n          <i class=\"bi bi-arrow-repeat me-1\"></i>Re-analyze\n        </button>\n        <button class=\"btn btn-sm btn-primary\" (click)=\"downloadReport()\"><i class=\"bi bi-file-earmark-pdf me-1\"></i>Download PDF Report</button>\n      </div>\n\n      <div class=\"row g-3 mb-3\">\n        <div class=\"col-md-3\">\n          <div class=\"card border-0 shadow-sm h-100\">\n            <div class=\"card-body text-center\">\n              <app-score-gauge [value]=\"analysis()!.atsScore\" label=\"ATS Score\" />\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-3\">\n          <div class=\"card border-0 shadow-sm h-100\">\n            <div class=\"card-body text-center\">\n              <app-score-gauge [value]=\"analysis()!.resumeStrengthScore\" label=\"Resume Strength\" />\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-6\">\n          <div class=\"card border-0 shadow-sm h-100\">\n            <div class=\"card-body\">\n              <h6 class=\"text-muted mb-2\">Summary</h6>\n              <p class=\"mb-0 small\">{{ analysis()!.summary }}</p>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"card border-0 shadow-sm mb-3\">\n        <div class=\"card-body\">\n          <h6 class=\"text-muted mb-3\">Skill Analysis</h6>\n          <canvas #skillsChart height=\"90\"></canvas>\n        </div>\n      </div>\n\n      <div class=\"row g-3\">\n        <div class=\"col-md-6\">\n          <div class=\"card border-0 shadow-sm h-100\">\n            <div class=\"card-body\">\n              <h6 class=\"text-muted mb-2\"><i class=\"bi bi-exclamation-triangle text-warning me-1\"></i>Missing Skills</h6>\n              @if (analysis()!.missingSkills?.length) {\n                <div class=\"d-flex flex-wrap gap-1\">\n                  @for (s of analysis()!.missingSkills; track s) { <span class=\"badge text-bg-warning-subtle text-warning-emphasis border\">{{ s }}</span> }\n                </div>\n              } @else { <p class=\"small text-muted mb-0\">None detected.</p> }\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-6\">\n          <div class=\"card border-0 shadow-sm h-100\">\n            <div class=\"card-body\">\n              <h6 class=\"text-muted mb-2\"><i class=\"bi bi-key text-info me-1\"></i>Missing Keywords</h6>\n              @if (analysis()!.missingKeywords?.length) {\n                <div class=\"d-flex flex-wrap gap-1\">\n                  @for (k of analysis()!.missingKeywords; track k) { <span class=\"badge text-bg-info-subtle text-info-emphasis border\">{{ k }}</span> }\n                </div>\n              } @else { <p class=\"small text-muted mb-0\">None detected.</p> }\n            </div>\n          </div>\n        </div>\n\n        <div class=\"col-md-6\">\n          <div class=\"card border-0 shadow-sm h-100\">\n            <div class=\"card-body\">\n              <h6 class=\"text-muted mb-2\"><i class=\"bi bi-check-circle text-success me-1\"></i>Strengths</h6>\n              <ul class=\"small mb-0 ps-3\">@for (s of analysis()!.strengths; track s) { <li>{{ s }}</li> }</ul>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-6\">\n          <div class=\"card border-0 shadow-sm h-100\">\n            <div class=\"card-body\">\n              <h6 class=\"text-muted mb-2\"><i class=\"bi bi-x-circle text-danger me-1\"></i>Weaknesses</h6>\n              <ul class=\"small mb-0 ps-3\">@for (s of analysis()!.weaknesses; track s) { <li>{{ s }}</li> }</ul>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"col-md-4\">\n          <div class=\"card border-0 shadow-sm h-100\">\n            <div class=\"card-body\">\n              <h6 class=\"text-muted mb-2\">Grammar Suggestions</h6>\n              <ul class=\"small mb-0 ps-3\">@for (s of analysis()!.grammarSuggestions; track s) { <li>{{ s }}</li> }</ul>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"card border-0 shadow-sm h-100\">\n            <div class=\"card-body\">\n              <h6 class=\"text-muted mb-2\">Formatting Suggestions</h6>\n              <ul class=\"small mb-0 ps-3\">@for (s of analysis()!.formattingSuggestions; track s) { <li>{{ s }}</li> }</ul>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"card border-0 shadow-sm h-100\">\n            <div class=\"card-body\">\n              <h6 class=\"text-muted mb-2\">Improvement Recommendations</h6>\n              <ul class=\"small mb-0 ps-3\">@for (s of analysis()!.improvementRecommendations; track s) { <li>{{ s }}</li> }</ul>\n            </div>\n          </div>\n        </div>\n      </div>\n    }\n\n    @if (atsChecks(); as checks) {\n      <div class=\"card border-0 shadow-sm mt-3\">\n        <div class=\"card-body\">\n          <h6 class=\"text-muted mb-3\">Deterministic ATS Parsing Checks</h6>\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <p class=\"small fw-semibold text-success mb-2\">Passed</p>\n              <ul class=\"small ps-3\">@for (p of checks.passed; track p) { <li>{{ p }}</li> }</ul>\n            </div>\n            <div class=\"col-md-6\">\n              <p class=\"small fw-semibold text-danger mb-2\">Issues</p>\n              <ul class=\"small ps-3\">@for (i of checks.issues; track i) { <li>{{ i }}</li> }</ul>\n            </div>\n          </div>\n        </div>\n      </div>\n    }\n  }\n</div>\n" }]
    }], () => [{ type: i1.ActivatedRoute }, { type: i2.ResumeService }, { type: i3.ReportService }, { type: i4.ToastService }], { skillsChartRef: [{
            type: ViewChild,
            args: ['skillsChart']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ResumeDetailComponent, { className: "ResumeDetailComponent", filePath: "src/app/features/resume/detail/resume-detail.component.ts", lineNumber: 20 }); })();
