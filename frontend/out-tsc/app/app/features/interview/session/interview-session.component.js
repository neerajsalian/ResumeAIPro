import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScoreGaugeComponent } from '../../../shared/components/score-gauge/score-gauge.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../../../core/services/interview.service";
import * as i3 from "../../../core/services/report.service";
import * as i4 from "../../../core/services/toast.service";
import * as i5 from "@angular/forms";
import * as i6 from "@angular/common";
const _forTrack0 = ($index, $item) => $item._id;
function InterviewSessionComponent_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 0);
    i0.ɵɵelement(1, "div", 1);
    i0.ɵɵelementEnd();
} }
function InterviewSessionComponent_Conditional_2_Conditional_0_For_36_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const s_r3 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(s_r3);
} }
function InterviewSessionComponent_Conditional_2_Conditional_0_For_45_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const s_r4 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(s_r4);
} }
function InterviewSessionComponent_Conditional_2_Conditional_0_For_54_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const s_r5 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(s_r5);
} }
function InterviewSessionComponent_Conditional_2_Conditional_0_For_58_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 25);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "div", 26)(3, "span");
    i0.ɵɵtext(4, "Score: ");
    i0.ɵɵelementStart(5, "strong");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "span");
    i0.ɵɵtext(8, "Confidence: ");
    i0.ɵɵelementStart(9, "strong");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "span");
    i0.ɵɵtext(12, "Communication: ");
    i0.ɵɵelementStart(13, "strong");
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "span");
    i0.ɵɵtext(16, "Technical: ");
    i0.ɵɵelementStart(17, "strong");
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(19, "p", 27)(20, "em");
    i0.ɵɵtext(21);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const a_r6 = ctx;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("Your answer: ", a_r6.answerText || "(no answer)");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(a_r6.evaluation == null ? null : a_r6.evaluation.score);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(a_r6.evaluation == null ? null : a_r6.evaluation.confidenceScore);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(a_r6.evaluation == null ? null : a_r6.evaluation.communicationScore);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(a_r6.evaluation == null ? null : a_r6.evaluation.technicalAccuracyScore);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(a_r6.evaluation == null ? null : a_r6.evaluation.feedback);
} }
function InterviewSessionComponent_Conditional_2_Conditional_0_For_58_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 23)(1, "div", 17)(2, "p", 24);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(4, InterviewSessionComponent_Conditional_2_Conditional_0_For_58_Conditional_4_Template, 22, 6);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    let tmp_15_0;
    const q_r7 = ctx.$implicit;
    const ɵ$index_116_r8 = ctx.$index;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate2("Q", ɵ$index_116_r8 + 1, ". ", q_r7.questionText);
    i0.ɵɵadvance();
    i0.ɵɵconditional((tmp_15_0 = ctx_r1.answers()[ɵ$index_116_r8]) ? 4 : -1, tmp_15_0);
} }
function InterviewSessionComponent_Conditional_2_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 2)(1, "div")(2, "h3", 3);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p", 4);
    i0.ɵɵtext(5);
    i0.ɵɵpipe(6, "date");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "button", 5);
    i0.ɵɵlistener("click", function InterviewSessionComponent_Conditional_2_Conditional_0_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.downloadReport()); });
    i0.ɵɵelement(8, "i", 6);
    i0.ɵɵtext(9, "Download PDF Report");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "div", 7)(11, "div", 8)(12, "div", 9)(13, "div", 10);
    i0.ɵɵelement(14, "app-score-gauge", 11);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(15, "div", 8)(16, "div", 9)(17, "div", 10);
    i0.ɵɵelement(18, "app-score-gauge", 12);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(19, "div", 8)(20, "div", 9)(21, "div", 10);
    i0.ɵɵelement(22, "app-score-gauge", 13);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(23, "div", 8)(24, "div", 9)(25, "div", 10);
    i0.ɵɵelement(26, "app-score-gauge", 14);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(27, "div", 7)(28, "div", 15)(29, "div", 16)(30, "div", 17)(31, "h6", 18);
    i0.ɵɵelement(32, "i", 19);
    i0.ɵɵtext(33, "Strengths");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(34, "ul", 20);
    i0.ɵɵrepeaterCreate(35, InterviewSessionComponent_Conditional_2_Conditional_0_For_36_Template, 2, 1, "li", null, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(37, "div", 15)(38, "div", 16)(39, "div", 17)(40, "h6", 18);
    i0.ɵɵelement(41, "i", 21);
    i0.ɵɵtext(42, "Weaknesses");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(43, "ul", 20);
    i0.ɵɵrepeaterCreate(44, InterviewSessionComponent_Conditional_2_Conditional_0_For_45_Template, 2, 1, "li", null, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(46, "div", 15)(47, "div", 16)(48, "div", 17)(49, "h6", 18);
    i0.ɵɵelement(50, "i", 22);
    i0.ɵɵtext(51, "Recommended Learning");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(52, "ul", 20);
    i0.ɵɵrepeaterCreate(53, InterviewSessionComponent_Conditional_2_Conditional_0_For_54_Template, 2, 1, "li", null, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(55, "h6", 18);
    i0.ɵɵtext(56, "Questions & Answers");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(57, InterviewSessionComponent_Conditional_2_Conditional_0_For_58_Template, 5, 3, "div", 23, _forTrack0);
} if (rf & 2) {
    const itv_r9 = i0.ɵɵnextContext();
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", itv_r9.interviewType, " Interview Report");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", itv_r9.jobRole || "General role", " \u00B7 Completed ", i0.ɵɵpipeBind2(6, 7, itv_r9.completedAt, "medium"));
    i0.ɵɵadvance(9);
    i0.ɵɵproperty("value", itv_r9.overallScore || 0);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("value", itv_r9.confidenceScore || 0);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("value", itv_r9.communicationScore || 0);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("value", itv_r9.technicalAccuracyScore || 0);
    i0.ɵɵadvance(9);
    i0.ɵɵrepeater(itv_r9.strengths);
    i0.ɵɵadvance(9);
    i0.ɵɵrepeater(itv_r9.weaknesses);
    i0.ɵɵadvance(9);
    i0.ɵɵrepeater(itv_r9.recommendedLearningAreas);
    i0.ɵɵadvance(4);
    i0.ɵɵrepeater(ctx_r1.questions());
} }
function InterviewSessionComponent_Conditional_2_Conditional_1_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const itv_r9 = i0.ɵɵnextContext(2);
    i0.ɵɵtextInterpolate1(" \u2014 ", itv_r9.jobRole, " ");
} }
function InterviewSessionComponent_Conditional_2_Conditional_1_Conditional_13_Conditional_6_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 52);
    i0.ɵɵlistener("click", function InterviewSessionComponent_Conditional_2_Conditional_1_Conditional_13_Conditional_6_Conditional_4_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r12); const ctx_r1 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r1.startListening()); });
    i0.ɵɵelement(1, "i", 53);
    i0.ɵɵtext(2, "Start Speaking ");
    i0.ɵɵelementEnd();
} }
function InterviewSessionComponent_Conditional_2_Conditional_1_Conditional_13_Conditional_6_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 54);
    i0.ɵɵlistener("click", function InterviewSessionComponent_Conditional_2_Conditional_1_Conditional_13_Conditional_6_Conditional_5_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r13); const ctx_r1 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r1.stopListening()); });
    i0.ɵɵelement(1, "i", 55);
    i0.ɵɵtext(2, "Stop ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 56);
    i0.ɵɵelement(4, "span", 57);
    i0.ɵɵtext(5, "Listening\u2026");
    i0.ɵɵelementEnd();
} }
function InterviewSessionComponent_Conditional_2_Conditional_1_Conditional_13_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 39)(1, "button", 49);
    i0.ɵɵlistener("click", function InterviewSessionComponent_Conditional_2_Conditional_1_Conditional_13_Conditional_6_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r11); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.speakCurrentQuestion()); });
    i0.ɵɵelement(2, "i", 50);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(4, InterviewSessionComponent_Conditional_2_Conditional_1_Conditional_13_Conditional_6_Conditional_4_Template, 3, 0, "button", 51)(5, InterviewSessionComponent_Conditional_2_Conditional_1_Conditional_13_Conditional_6_Conditional_5_Template, 6, 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r1.isSpeaking());
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r1.isSpeaking() ? "Speaking\u2026" : "Replay Question", " ");
    i0.ɵɵadvance();
    i0.ɵɵconditional(!ctx_r1.isListening() ? 4 : 5);
} }
function InterviewSessionComponent_Conditional_2_Conditional_1_Conditional_13_Conditional_16_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 59);
    i0.ɵɵtext(1, " Evaluating\u2026 ");
} }
function InterviewSessionComponent_Conditional_2_Conditional_1_Conditional_13_Conditional_16_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " Submit Answer ");
} }
function InterviewSessionComponent_Conditional_2_Conditional_1_Conditional_13_Conditional_16_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 58);
    i0.ɵɵlistener("click", function InterviewSessionComponent_Conditional_2_Conditional_1_Conditional_13_Conditional_16_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r14); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.submitAnswer()); });
    i0.ɵɵconditionalCreate(1, InterviewSessionComponent_Conditional_2_Conditional_1_Conditional_13_Conditional_16_Conditional_1_Template, 2, 0)(2, InterviewSessionComponent_Conditional_2_Conditional_1_Conditional_13_Conditional_16_Conditional_2_Template, 1, 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("disabled", ctx_r1.submitting());
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.submitting() ? 1 : 2);
} }
function InterviewSessionComponent_Conditional_2_Conditional_1_Conditional_13_Conditional_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 47);
    i0.ɵɵelement(1, "i", 60);
    i0.ɵɵtext(2, "Answered");
    i0.ɵɵelementEnd();
} }
function InterviewSessionComponent_Conditional_2_Conditional_1_Conditional_13_Conditional_18_Conditional_15_For_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const p_r15 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(p_r15);
} }
function InterviewSessionComponent_Conditional_2_Conditional_1_Conditional_13_Conditional_18_Conditional_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 65);
    i0.ɵɵtext(1, "A strong answer would include:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "ul", 66);
    i0.ɵɵrepeaterCreate(3, InterviewSessionComponent_Conditional_2_Conditional_1_Conditional_13_Conditional_18_Conditional_15_For_4_Template, 2, 1, "li", null, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ev_r16 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ev_r16.evaluation.idealAnswerPointers);
} }
function InterviewSessionComponent_Conditional_2_Conditional_1_Conditional_13_Conditional_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 48)(1, "div", 17)(2, "h6", 18);
    i0.ɵɵtext(3, "AI Evaluation");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 61)(5, "span", 62);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "span", 63);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "span", 63);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "span", 63);
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "p", 64);
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(15, InterviewSessionComponent_Conditional_2_Conditional_1_Conditional_13_Conditional_18_Conditional_15_Template, 5, 0);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ev_r16 = ctx;
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1("Score: ", ev_r16.evaluation.score);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Confidence: ", ev_r16.evaluation.confidenceScore);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Communication: ", ev_r16.evaluation.communicationScore);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Technical: ", ev_r16.evaluation.technicalAccuracyScore);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ev_r16.evaluation.feedback);
    i0.ɵɵadvance();
    i0.ɵɵconditional((ev_r16.evaluation.idealAnswerPointers == null ? null : ev_r16.evaluation.idealAnswerPointers.length) ? 15 : -1);
} }
function InterviewSessionComponent_Conditional_2_Conditional_1_Conditional_13_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 36)(1, "div", 17)(2, "span", 37);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "h5", 38);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(6, InterviewSessionComponent_Conditional_2_Conditional_1_Conditional_13_Conditional_6_Template, 6, 3, "div", 39);
    i0.ɵɵelementStart(7, "textarea", 40);
    i0.ɵɵtwoWayListener("ngModelChange", function InterviewSessionComponent_Conditional_2_Conditional_1_Conditional_13_Template_textarea_ngModelChange_7_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r1 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r1.answerText, $event) || (ctx_r1.answerText = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 41)(9, "div")(10, "button", 42);
    i0.ɵɵlistener("click", function InterviewSessionComponent_Conditional_2_Conditional_1_Conditional_13_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r10); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.prevQuestion()); });
    i0.ɵɵelement(11, "i", 43);
    i0.ɵɵtext(12, " Previous ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "button", 44);
    i0.ɵɵlistener("click", function InterviewSessionComponent_Conditional_2_Conditional_1_Conditional_13_Template_button_click_13_listener() { i0.ɵɵrestoreView(_r10); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.nextQuestion()); });
    i0.ɵɵtext(14, " Next ");
    i0.ɵɵelement(15, "i", 45);
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(16, InterviewSessionComponent_Conditional_2_Conditional_1_Conditional_13_Conditional_16_Template, 3, 2, "button", 46)(17, InterviewSessionComponent_Conditional_2_Conditional_1_Conditional_13_Conditional_17_Template, 3, 0, "span", 47);
    i0.ɵɵelementEnd()()();
    i0.ɵɵconditionalCreate(18, InterviewSessionComponent_Conditional_2_Conditional_1_Conditional_13_Conditional_18_Template, 16, 6, "div", 48);
} if (rf & 2) {
    let tmp_13_0;
    const q_r17 = ctx;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate2("", q_r17.category, " \u00B7 ", q_r17.difficulty);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(q_r17.questionText);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.mode === "voice" ? 6 : -1);
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.answerText);
    i0.ɵɵproperty("disabled", ctx_r1.isAnswered);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("disabled", ctx_r1.currentIndex() === 0);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("disabled", ctx_r1.currentIndex() === ctx_r1.questions().length - 1);
    i0.ɵɵadvance(3);
    i0.ɵɵconditional(!ctx_r1.isAnswered ? 16 : 17);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional((tmp_13_0 = ctx_r1.lastEvaluation()) ? 18 : -1, tmp_13_0);
} }
function InterviewSessionComponent_Conditional_2_Conditional_1_Conditional_14_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 59);
    i0.ɵɵtext(1, " Finalizing\u2026 ");
} }
function InterviewSessionComponent_Conditional_2_Conditional_1_Conditional_14_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 68);
    i0.ɵɵtext(1, "Finish Interview & Get Report ");
} }
function InterviewSessionComponent_Conditional_2_Conditional_1_Conditional_14_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 35)(1, "button", 67);
    i0.ɵɵlistener("click", function InterviewSessionComponent_Conditional_2_Conditional_1_Conditional_14_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r18); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.finishInterview()); });
    i0.ɵɵconditionalCreate(2, InterviewSessionComponent_Conditional_2_Conditional_1_Conditional_14_Conditional_2_Template, 2, 0)(3, InterviewSessionComponent_Conditional_2_Conditional_1_Conditional_14_Conditional_3_Template, 2, 0);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r1.completing());
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.completing() ? 2 : 3);
} }
function InterviewSessionComponent_Conditional_2_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 28)(1, "div")(2, "h5", 3);
    i0.ɵɵtext(3);
    i0.ɵɵconditionalCreate(4, InterviewSessionComponent_Conditional_2_Conditional_1_Conditional_4_Template, 1, 1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p", 29);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "div", 30)(8, "span", 31);
    i0.ɵɵelement(9, "i", 32);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(11, "div", 33);
    i0.ɵɵelement(12, "div", 34);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(13, InterviewSessionComponent_Conditional_2_Conditional_1_Conditional_13_Template, 19, 10);
    i0.ɵɵconditionalCreate(14, InterviewSessionComponent_Conditional_2_Conditional_1_Conditional_14_Template, 4, 2, "div", 35);
} if (rf & 2) {
    let tmp_8_0;
    const itv_r9 = i0.ɵɵnextContext();
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", itv_r9.interviewType, " Interview ");
    i0.ɵɵadvance();
    i0.ɵɵconditional(itv_r9.jobRole ? 4 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate3("Question ", ctx_r1.currentIndex() + 1, " of ", ctx_r1.questions().length, " \u00B7 ", ctx_r1.mode === "voice" ? "Voice mode" : "Text mode");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r1.formattedTime(ctx_r1.elapsedSeconds()));
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("width", ctx_r1.answeredCount / ctx_r1.questions().length * 100, "%");
    i0.ɵɵadvance();
    i0.ɵɵconditional((tmp_8_0 = ctx_r1.currentQuestion) ? 13 : -1, tmp_8_0);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.allAnswered ? 14 : -1);
} }
function InterviewSessionComponent_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵconditionalCreate(0, InterviewSessionComponent_Conditional_2_Conditional_0_Template, 59, 10)(1, InterviewSessionComponent_Conditional_2_Conditional_1_Template, 15, 10);
} if (rf & 2) {
    i0.ɵɵconditional(ctx.status === "completed" ? 0 : 1);
} }
export class InterviewSessionComponent {
    route;
    interviewService;
    reportService;
    toast;
    interviewId = '';
    interview = signal(null, ...(ngDevMode ? [{ debugName: "interview" }] : []));
    questions = signal([], ...(ngDevMode ? [{ debugName: "questions" }] : []));
    answers = signal([], ...(ngDevMode ? [{ debugName: "answers" }] : []));
    loading = signal(true, ...(ngDevMode ? [{ debugName: "loading" }] : []));
    currentIndex = signal(0, ...(ngDevMode ? [{ debugName: "currentIndex" }] : []));
    answerText = '';
    submitting = signal(false, ...(ngDevMode ? [{ debugName: "submitting" }] : []));
    completing = signal(false, ...(ngDevMode ? [{ debugName: "completing" }] : []));
    lastEvaluation = signal(null, ...(ngDevMode ? [{ debugName: "lastEvaluation" }] : []));
    // Timer
    elapsedSeconds = signal(0, ...(ngDevMode ? [{ debugName: "elapsedSeconds" }] : []));
    timerHandle;
    questionStartedAt = 0;
    // Voice mode state
    isListening = signal(false, ...(ngDevMode ? [{ debugName: "isListening" }] : []));
    isSpeaking = signal(false, ...(ngDevMode ? [{ debugName: "isSpeaking" }] : []));
    recognition = null;
    constructor(route, interviewService, reportService, toast) {
        this.route = route;
        this.interviewService = interviewService;
        this.reportService = reportService;
        this.toast = toast;
    }
    ngOnInit() {
        this.interviewId = this.route.snapshot.paramMap.get('id') || '';
        this.load();
        this.timerHandle = setInterval(() => this.elapsedSeconds.update((s) => s + 1), 1000);
    }
    ngOnDestroy() {
        clearInterval(this.timerHandle);
        this.recognition?.abort();
        speechSynthesis.cancel();
    }
    get mode() {
        return this.interview()?.mode || 'text';
    }
    load() {
        // Try text endpoint first; interview mode determines which endpoint the record lives under logically,
        // but both endpoints read/write the same Interview document, so text GET works regardless of mode.
        this.interviewService.get(this.interviewId, 'text').subscribe({
            next: (res) => {
                this.interview.set(res.data.interview);
                this.questions.set(res.data.questions);
                this.answers.set(res.data.answers);
                this.questionStartedAt = Date.now();
                this.loading.set(false);
                if (this.mode === 'voice' && this.interview()?.status !== 'completed') {
                    setTimeout(() => this.speakCurrentQuestion(), 400);
                }
            },
            error: () => this.loading.set(false),
        });
    }
    get currentQuestion() {
        return this.questions()[this.currentIndex()] || null;
    }
    get isAnswered() {
        const q = this.currentQuestion;
        if (!q)
            return false;
        return this.answers().some((a) => a.question === q._id);
    }
    get answeredCount() {
        return this.answers().length;
    }
    formattedTime(totalSeconds) {
        const m = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
        const s = Math.floor(totalSeconds % 60).toString().padStart(2, '0');
        return `${m}:${s}`;
    }
    // ---- Voice mode: Text-to-Speech + Speech-to-Text via the browser ----
    speakCurrentQuestion() {
        const q = this.currentQuestion;
        if (!q || !('speechSynthesis' in window))
            return;
        speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(q.questionText);
        utterance.rate = 0.98;
        this.isSpeaking.set(true);
        utterance.onend = () => this.isSpeaking.set(false);
        speechSynthesis.speak(utterance);
    }
    startListening() {
        const SpeechRecognitionCtor = window.webkitSpeechRecognition || window.SpeechRecognition;
        if (!SpeechRecognitionCtor) {
            this.toast.show('Speech recognition is not supported in this browser. Try Chrome or Edge.', 'error');
            return;
        }
        this.recognition = new SpeechRecognitionCtor();
        this.recognition.continuous = true;
        this.recognition.interimResults = true;
        this.recognition.lang = 'en-US';
        let finalTranscript = this.answerText ? this.answerText + ' ' : '';
        this.recognition.onresult = (event) => {
            let interim = '';
            for (let i = event.resultIndex; i < event.results.length; i++) {
                const result = event.results[i];
                if (result.isFinal)
                    finalTranscript += result[0].transcript + ' ';
                else
                    interim += result[0].transcript;
            }
            this.answerText = (finalTranscript + interim).trim();
        };
        this.recognition.onerror = () => this.isListening.set(false);
        this.recognition.onend = () => this.isListening.set(false);
        this.recognition.start();
        this.isListening.set(true);
    }
    stopListening() {
        this.recognition?.stop();
        this.isListening.set(false);
    }
    // ---- Answer submission ----
    submitAnswer() {
        const q = this.currentQuestion;
        if (!q)
            return;
        if (!this.answerText.trim()) {
            this.toast.show('Please provide an answer before submitting', 'error');
            return;
        }
        this.submitting.set(true);
        const responseTimeSeconds = Math.round((Date.now() - this.questionStartedAt) / 1000);
        this.interviewService
            .submitAnswer(this.interviewId, this.mode, { questionId: q._id, answerText: this.answerText, responseTimeSeconds })
            .subscribe({
            next: (res) => {
                this.answers.update((list) => [...list, res.data.answer]);
                this.lastEvaluation.set(res.data.answer);
                this.interview.update((i) => (i ? { ...i, answeredQuestions: i.answeredQuestions + 1 } : i));
            },
            error: () => this.submitting.set(false),
            complete: () => this.submitting.set(false),
        });
    }
    nextQuestion() {
        this.lastEvaluation.set(null);
        this.answerText = '';
        this.currentIndex.update((i) => Math.min(i + 1, this.questions().length - 1));
        this.questionStartedAt = Date.now();
        if (this.mode === 'voice')
            setTimeout(() => this.speakCurrentQuestion(), 300);
    }
    prevQuestion() {
        this.lastEvaluation.set(null);
        this.currentIndex.update((i) => Math.max(i - 1, 0));
        const existing = this.answers().find((a) => a.question === this.currentQuestion?._id);
        this.answerText = existing?.answerText || '';
    }
    get allAnswered() {
        return this.answeredCount >= this.questions().length && this.questions().length > 0;
    }
    finishInterview() {
        this.completing.set(true);
        this.interviewService.complete(this.interviewId, this.mode).subscribe({
            next: (res) => {
                this.interview.set(res.data.interview);
                this.toast.show('Interview completed! Here is your report.', 'success');
            },
            error: () => this.completing.set(false),
            complete: () => this.completing.set(false),
        });
    }
    downloadReport() {
        this.reportService.generateInterviewReport(this.interviewId).subscribe((res) => {
            window.open(this.reportService.downloadUrl(res.data.report._id), '_blank');
        });
    }
    static ɵfac = function InterviewSessionComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || InterviewSessionComponent)(i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(i2.InterviewService), i0.ɵɵdirectiveInject(i3.ReportService), i0.ɵɵdirectiveInject(i4.ToastService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: InterviewSessionComponent, selectors: [["app-interview-session"]], decls: 3, vars: 1, consts: [[1, "text-center", "py-5"], [1, "spinner-border", "text-primary"], [1, "d-flex", "justify-content-between", "align-items-start", "flex-wrap", "gap-2", "mb-4"], [1, "fw-bold", "mb-0"], [1, "text-muted", "mb-0"], [1, "btn", "btn-primary", 3, "click"], [1, "bi", "bi-file-earmark-pdf", "me-1"], [1, "row", "g-3", "mb-3"], [1, "col-6", "col-md-3"], [1, "card", "border-0", "shadow-sm"], [1, "card-body", "text-center"], ["label", "Overall", 3, "value"], ["label", "Confidence", 3, "value"], ["label", "Communication", 3, "value"], ["label", "Technical", 3, "value"], [1, "col-md-4"], [1, "card", "border-0", "shadow-sm", "h-100"], [1, "card-body"], [1, "text-muted", "mb-2"], [1, "bi", "bi-check-circle", "text-success", "me-1"], [1, "small", "ps-3"], [1, "bi", "bi-x-circle", "text-danger", "me-1"], [1, "bi", "bi-lightbulb", "text-warning", "me-1"], [1, "card", "border-0", "shadow-sm", "mb-2"], [1, "fw-semibold", "mb-1"], [1, "small", "text-muted", "mb-2"], [1, "d-flex", "gap-3", "small", "mb-1"], [1, "small", "mb-0"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-3", "flex-wrap", "gap-2"], [1, "text-muted", "small", "mb-0"], [1, "d-flex", "align-items-center", "gap-3"], [1, "badge", "text-bg-dark", "fs-6"], [1, "bi", "bi-stopwatch", "me-1"], [1, "progress", "mb-4", 2, "height", "8px"], [1, "progress-bar"], [1, "text-center", "mt-4"], [1, "card", "border-0", "shadow-sm", "mb-3"], [1, "badge", "text-bg-light", "border", "mb-2"], [1, "mb-3"], [1, "d-flex", "align-items-center", "gap-2", "mb-3"], ["rows", "5", "placeholder", "Type (or speak) your answer here\u2026", 1, "form-control", 3, "ngModelChange", "ngModel", "disabled"], [1, "d-flex", "justify-content-between", "mt-3"], [1, "btn", "btn-outline-secondary", "me-2", 3, "click", "disabled"], [1, "bi", "bi-arrow-left"], [1, "btn", "btn-outline-secondary", 3, "click", "disabled"], [1, "bi", "bi-arrow-right"], [1, "btn", "btn-primary", 3, "disabled"], [1, "badge", "text-bg-success", "align-self-center"], [1, "card", "border-0", "shadow-sm", "mb-3", "border-start", "border-4", "border-primary"], [1, "btn", "btn-sm", "btn-outline-secondary", 3, "click", "disabled"], [1, "bi", "bi-volume-up", "me-1"], [1, "btn", "btn-sm", "btn-primary"], [1, "btn", "btn-sm", "btn-primary", 3, "click"], [1, "bi", "bi-mic-fill", "me-1"], [1, "btn", "btn-sm", "btn-danger", 3, "click"], [1, "bi", "bi-mic-mute-fill", "me-1"], [1, "text-danger", "small"], [1, "spinner-grow", "spinner-grow-sm", "me-1"], [1, "btn", "btn-primary", 3, "click", "disabled"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "bi", "bi-check-lg", "me-1"], [1, "d-flex", "gap-3", "small", "mb-2", "flex-wrap"], [1, "badge", "text-bg-primary"], [1, "badge", "text-bg-light", "border"], [1, "small", "mb-2"], [1, "small", "fw-semibold", "mb-1"], [1, "small", "ps-3", "mb-0"], [1, "btn", "btn-success", "btn-lg", "px-5", 3, "click", "disabled"], [1, "bi", "bi-flag-fill", "me-2"]], template: function InterviewSessionComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵconditionalCreate(1, InterviewSessionComponent_Conditional_1_Template, 2, 0, "div", 0)(2, InterviewSessionComponent_Conditional_2_Template, 2, 1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            let tmp_0_0;
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.loading() ? 1 : (tmp_0_0 = ctx.interview()) ? 2 : -1, tmp_0_0);
        } }, dependencies: [CommonModule, FormsModule, i5.DefaultValueAccessor, i5.NgControlStatus, i5.NgModel, ScoreGaugeComponent, i6.DatePipe], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InterviewSessionComponent, [{
        type: Component,
        args: [{ selector: 'app-interview-session', standalone: true, imports: [CommonModule, FormsModule, ScoreGaugeComponent], template: "<div>\n  @if (loading()) {\n    <div class=\"text-center py-5\"><div class=\"spinner-border text-primary\"></div></div>\n  } @else if (interview(); as itv) {\n\n    @if (itv.status === 'completed') {\n      <!-- ===== COMPLETED REPORT VIEW ===== -->\n      <div class=\"d-flex justify-content-between align-items-start flex-wrap gap-2 mb-4\">\n        <div>\n          <h3 class=\"fw-bold mb-0\">{{ itv.interviewType }} Interview Report</h3>\n          <p class=\"text-muted mb-0\">{{ itv.jobRole || 'General role' }} \u00B7 Completed {{ itv.completedAt | date: 'medium' }}</p>\n        </div>\n        <button class=\"btn btn-primary\" (click)=\"downloadReport()\"><i class=\"bi bi-file-earmark-pdf me-1\"></i>Download PDF Report</button>\n      </div>\n\n      <div class=\"row g-3 mb-3\">\n        <div class=\"col-6 col-md-3\"><div class=\"card border-0 shadow-sm\"><div class=\"card-body text-center\"><app-score-gauge [value]=\"itv.overallScore || 0\" label=\"Overall\" /></div></div></div>\n        <div class=\"col-6 col-md-3\"><div class=\"card border-0 shadow-sm\"><div class=\"card-body text-center\"><app-score-gauge [value]=\"itv.confidenceScore || 0\" label=\"Confidence\" /></div></div></div>\n        <div class=\"col-6 col-md-3\"><div class=\"card border-0 shadow-sm\"><div class=\"card-body text-center\"><app-score-gauge [value]=\"itv.communicationScore || 0\" label=\"Communication\" /></div></div></div>\n        <div class=\"col-6 col-md-3\"><div class=\"card border-0 shadow-sm\"><div class=\"card-body text-center\"><app-score-gauge [value]=\"itv.technicalAccuracyScore || 0\" label=\"Technical\" /></div></div></div>\n      </div>\n\n      <div class=\"row g-3 mb-3\">\n        <div class=\"col-md-4\">\n          <div class=\"card border-0 shadow-sm h-100\"><div class=\"card-body\">\n            <h6 class=\"text-muted mb-2\"><i class=\"bi bi-check-circle text-success me-1\"></i>Strengths</h6>\n            <ul class=\"small ps-3\">@for (s of itv.strengths; track s) { <li>{{ s }}</li> }</ul>\n          </div></div>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"card border-0 shadow-sm h-100\"><div class=\"card-body\">\n            <h6 class=\"text-muted mb-2\"><i class=\"bi bi-x-circle text-danger me-1\"></i>Weaknesses</h6>\n            <ul class=\"small ps-3\">@for (s of itv.weaknesses; track s) { <li>{{ s }}</li> }</ul>\n          </div></div>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"card border-0 shadow-sm h-100\"><div class=\"card-body\">\n            <h6 class=\"text-muted mb-2\"><i class=\"bi bi-lightbulb text-warning me-1\"></i>Recommended Learning</h6>\n            <ul class=\"small ps-3\">@for (s of itv.recommendedLearningAreas; track s) { <li>{{ s }}</li> }</ul>\n          </div></div>\n        </div>\n      </div>\n\n      <h6 class=\"text-muted mb-2\">Questions &amp; Answers</h6>\n      @for (q of questions(); track q._id; let idx = $index) {\n        <div class=\"card border-0 shadow-sm mb-2\">\n          <div class=\"card-body\">\n            <p class=\"fw-semibold mb-1\">Q{{ idx + 1 }}. {{ q.questionText }}</p>\n            @if (answers()[idx]; as a) {\n              <p class=\"small text-muted mb-2\">Your answer: {{ a.answerText || '(no answer)' }}</p>\n              <div class=\"d-flex gap-3 small mb-1\">\n                <span>Score: <strong>{{ a.evaluation?.score }}</strong></span>\n                <span>Confidence: <strong>{{ a.evaluation?.confidenceScore }}</strong></span>\n                <span>Communication: <strong>{{ a.evaluation?.communicationScore }}</strong></span>\n                <span>Technical: <strong>{{ a.evaluation?.technicalAccuracyScore }}</strong></span>\n              </div>\n              <p class=\"small mb-0\"><em>{{ a.evaluation?.feedback }}</em></p>\n            }\n          </div>\n        </div>\n      }\n\n    } @else {\n      <!-- ===== ACTIVE SESSION VIEW ===== -->\n      <div class=\"d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2\">\n        <div>\n          <h5 class=\"fw-bold mb-0\">{{ itv.interviewType }} Interview @if (itv.jobRole) { \u2014 {{ itv.jobRole }} }</h5>\n          <p class=\"text-muted small mb-0\">Question {{ currentIndex() + 1 }} of {{ questions().length }} \u00B7 {{ mode === 'voice' ? 'Voice mode' : 'Text mode' }}</p>\n        </div>\n        <div class=\"d-flex align-items-center gap-3\">\n          <span class=\"badge text-bg-dark fs-6\"><i class=\"bi bi-stopwatch me-1\"></i>{{ formattedTime(elapsedSeconds()) }}</span>\n        </div>\n      </div>\n\n      <div class=\"progress mb-4\" style=\"height: 8px;\">\n        <div class=\"progress-bar\" [style.width.%]=\"(answeredCount / questions().length) * 100\"></div>\n      </div>\n\n      @if (currentQuestion; as q) {\n        <div class=\"card border-0 shadow-sm mb-3\">\n          <div class=\"card-body\">\n            <span class=\"badge text-bg-light border mb-2\">{{ q.category }} \u00B7 {{ q.difficulty }}</span>\n            <h5 class=\"mb-3\">{{ q.questionText }}</h5>\n\n            @if (mode === 'voice') {\n              <div class=\"d-flex align-items-center gap-2 mb-3\">\n                <button class=\"btn btn-sm btn-outline-secondary\" (click)=\"speakCurrentQuestion()\" [disabled]=\"isSpeaking()\">\n                  <i class=\"bi bi-volume-up me-1\"></i>{{ isSpeaking() ? 'Speaking\u2026' : 'Replay Question' }}\n                </button>\n                @if (!isListening()) {\n                  <button class=\"btn btn-sm btn-primary\" (click)=\"startListening()\">\n                    <i class=\"bi bi-mic-fill me-1\"></i>Start Speaking\n                  </button>\n                } @else {\n                  <button class=\"btn btn-sm btn-danger\" (click)=\"stopListening()\">\n                    <i class=\"bi bi-mic-mute-fill me-1\"></i>Stop\n                  </button>\n                  <span class=\"text-danger small\"><span class=\"spinner-grow spinner-grow-sm me-1\"></span>Listening\u2026</span>\n                }\n              </div>\n            }\n\n            <textarea class=\"form-control\" rows=\"5\" [(ngModel)]=\"answerText\" placeholder=\"Type (or speak) your answer here\u2026\" [disabled]=\"isAnswered\"></textarea>\n\n            <div class=\"d-flex justify-content-between mt-3\">\n              <div>\n                <button class=\"btn btn-outline-secondary me-2\" (click)=\"prevQuestion()\" [disabled]=\"currentIndex() === 0\">\n                  <i class=\"bi bi-arrow-left\"></i> Previous\n                </button>\n                <button class=\"btn btn-outline-secondary\" (click)=\"nextQuestion()\" [disabled]=\"currentIndex() === questions().length - 1\">\n                  Next <i class=\"bi bi-arrow-right\"></i>\n                </button>\n              </div>\n              @if (!isAnswered) {\n                <button class=\"btn btn-primary\" (click)=\"submitAnswer()\" [disabled]=\"submitting()\">\n                  @if (submitting()) { <span class=\"spinner-border spinner-border-sm me-2\"></span> Evaluating\u2026 } @else { Submit Answer }\n                </button>\n              } @else {\n                <span class=\"badge text-bg-success align-self-center\"><i class=\"bi bi-check-lg me-1\"></i>Answered</span>\n              }\n            </div>\n          </div>\n        </div>\n\n        @if (lastEvaluation(); as ev) {\n          <div class=\"card border-0 shadow-sm mb-3 border-start border-4 border-primary\">\n            <div class=\"card-body\">\n              <h6 class=\"text-muted mb-2\">AI Evaluation</h6>\n              <div class=\"d-flex gap-3 small mb-2 flex-wrap\">\n                <span class=\"badge text-bg-primary\">Score: {{ ev.evaluation.score }}</span>\n                <span class=\"badge text-bg-light border\">Confidence: {{ ev.evaluation.confidenceScore }}</span>\n                <span class=\"badge text-bg-light border\">Communication: {{ ev.evaluation.communicationScore }}</span>\n                <span class=\"badge text-bg-light border\">Technical: {{ ev.evaluation.technicalAccuracyScore }}</span>\n              </div>\n              <p class=\"small mb-2\">{{ ev.evaluation.feedback }}</p>\n              @if (ev.evaluation.idealAnswerPointers?.length) {\n                <p class=\"small fw-semibold mb-1\">A strong answer would include:</p>\n                <ul class=\"small ps-3 mb-0\">@for (p of ev.evaluation.idealAnswerPointers; track p) { <li>{{ p }}</li> }</ul>\n              }\n            </div>\n          </div>\n        }\n      }\n\n      @if (allAnswered) {\n        <div class=\"text-center mt-4\">\n          <button class=\"btn btn-success btn-lg px-5\" (click)=\"finishInterview()\" [disabled]=\"completing()\">\n            @if (completing()) { <span class=\"spinner-border spinner-border-sm me-2\"></span> Finalizing\u2026 } @else { <i class=\"bi bi-flag-fill me-2\"></i>Finish Interview & Get Report }\n          </button>\n        </div>\n      }\n    }\n  }\n</div>\n" }]
    }], () => [{ type: i1.ActivatedRoute }, { type: i2.InterviewService }, { type: i3.ReportService }, { type: i4.ToastService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(InterviewSessionComponent, { className: "InterviewSessionComponent", filePath: "src/app/features/interview/session/interview-session.component.ts", lineNumber: 17 }); })();
