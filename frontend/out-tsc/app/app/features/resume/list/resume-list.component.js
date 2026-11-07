import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import * as i0 from "@angular/core";
import * as i1 from "../../../core/services/resume.service";
import * as i2 from "../../../core/services/toast.service";
import * as i3 from "@angular/common";
const _c0 = a0 => ["/resume", a0];
const _forTrack0 = ($index, $item) => $item._id;
function ResumeListComponent_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 6);
    i0.ɵɵelementStart(1, "p", 7);
    i0.ɵɵtext(2, "Uploading and parsing your resume\u2026");
    i0.ɵɵelementEnd();
} }
function ResumeListComponent_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelement(0, "i", 8);
    i0.ɵɵelementStart(1, "p", 9);
    i0.ɵɵtext(2, "Drag & drop your resume PDF here, or");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "label", 10);
    i0.ɵɵtext(4, " Choose PDF File ");
    i0.ɵɵelementStart(5, "input", 11);
    i0.ɵɵlistener("change", function ResumeListComponent_Conditional_6_Template_input_change_5_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onFileSelected($event)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "p", 12);
    i0.ɵɵtext(7, "PDF only, up to 10MB");
    i0.ɵɵelementEnd();
} }
function ResumeListComponent_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵelement(1, "div", 13);
    i0.ɵɵelementEnd();
} }
function ResumeListComponent_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 4);
    i0.ɵɵtext(1, "No resumes uploaded yet. Upload one above to get started.");
    i0.ɵɵelementEnd();
} }
function ResumeListComponent_Conditional_9_For_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 14)(1, "div", 15)(2, "div", 16)(3, "div", 17)(4, "div")(5, "h6", 18);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "span", 19);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "span", 20);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "button", 21);
    i0.ɵɵlistener("click", function ResumeListComponent_Conditional_9_For_2_Template_button_click_11_listener() { const r_r4 = i0.ɵɵrestoreView(_r3).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.deleteResume(r_r4._id)); });
    i0.ɵɵelement(12, "i", 22);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "p", 23);
    i0.ɵɵtext(14);
    i0.ɵɵpipe(15, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "div", 24)(17, "a", 25);
    i0.ɵɵtext(18, "Analyze & View");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "a", 26);
    i0.ɵɵelement(20, "i", 27);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const r_r4 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("title", r_r4.originalFileName);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(r_r4.originalFileName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("v", r_r4.version);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("text-bg-success", r_r4.status === "analyzed")("text-bg-info", r_r4.status === "parsed")("text-bg-danger", r_r4.status === "failed")("text-bg-secondary", r_r4.status === "uploaded" || r_r4.status === "parsing");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(r_r4.status);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("Uploaded ", i0.ɵɵpipeBind2(15, 15, r_r4.createdAt, "medium"));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(18, _c0, r_r4._id));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("href", ctx_r1.downloadUrl(r_r4._id), i0.ɵɵsanitizeUrl);
} }
function ResumeListComponent_Conditional_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵrepeaterCreate(1, ResumeListComponent_Conditional_9_For_2_Template, 21, 20, "div", 14, _forTrack0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r1.resumes());
} }
export class ResumeListComponent {
    resumeService;
    toast;
    resumes = signal([], ...(ngDevMode ? [{ debugName: "resumes" }] : []));
    loading = signal(true, ...(ngDevMode ? [{ debugName: "loading" }] : []));
    uploading = signal(false, ...(ngDevMode ? [{ debugName: "uploading" }] : []));
    dragOver = signal(false, ...(ngDevMode ? [{ debugName: "dragOver" }] : []));
    constructor(resumeService, toast) {
        this.resumeService = resumeService;
        this.toast = toast;
    }
    ngOnInit() {
        this.refresh();
    }
    refresh() {
        this.loading.set(true);
        this.resumeService.list().subscribe({
            next: (res) => this.resumes.set(res.data.resumes),
            complete: () => this.loading.set(false),
        });
    }
    onFileSelected(event) {
        const input = event.target;
        if (input.files?.length)
            this.uploadFile(input.files[0]);
    }
    onDrop(event) {
        event.preventDefault();
        this.dragOver.set(false);
        const file = event.dataTransfer?.files?.[0];
        if (file)
            this.uploadFile(file);
    }
    uploadFile(file) {
        if (file.type !== 'application/pdf') {
            this.toast.show('Only PDF resumes are supported', 'error');
            return;
        }
        this.uploading.set(true);
        this.resumeService.upload(file).subscribe({
            next: () => {
                this.toast.show('Resume uploaded and parsed successfully', 'success');
                this.refresh();
            },
            error: () => this.uploading.set(false),
            complete: () => this.uploading.set(false),
        });
    }
    deleteResume(id) {
        if (!confirm('Delete this resume? This cannot be undone.'))
            return;
        this.resumeService.delete(id).subscribe(() => {
            this.toast.show('Resume deleted', 'success');
            this.refresh();
        });
    }
    downloadUrl(id) {
        return this.resumeService.downloadUrl(id);
    }
    static ɵfac = function ResumeListComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ResumeListComponent)(i0.ɵɵdirectiveInject(i1.ResumeService), i0.ɵɵdirectiveInject(i2.ToastService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ResumeListComponent, selectors: [["app-resume-list"]], decls: 10, vars: 4, consts: [[1, "fw-bold", "mb-3"], [1, "upload-dropzone", "card", "border-2", "border-dashed", "shadow-sm", "mb-4", "text-center", "py-5", 3, "dragover", "dragleave", "drop"], [1, "card-body"], [1, "text-center", "py-4"], [1, "text-muted"], [1, "row", "g-3"], [1, "spinner-border", "text-primary", "mb-2"], [1, "mb-0"], [1, "bi", "bi-cloud-arrow-up", "display-4", "text-primary"], [1, "mt-2", "mb-3"], [1, "btn", "btn-primary"], ["type", "file", "accept", "application/pdf", 1, "d-none", 3, "change"], [1, "text-muted", "small", "mt-2", "mb-0"], [1, "spinner-border", "text-primary"], [1, "col-md-6", "col-lg-4"], [1, "card", "border-0", "shadow-sm", "h-100"], [1, "card-body", "d-flex", "flex-column"], [1, "d-flex", "justify-content-between", "align-items-start"], [1, "fw-semibold", "mb-1", "text-truncate", 2, "max-width", "200px", 3, "title"], [1, "badge", "text-bg-light", "border"], [1, "badge"], [1, "btn", "btn-sm", "btn-link", "text-danger", "p-0", 3, "click"], [1, "bi", "bi-trash"], [1, "small", "text-muted", "mt-2", "mb-3"], [1, "mt-auto", "d-flex", "gap-2"], [1, "btn", "btn-sm", "btn-primary", "flex-grow-1", 3, "routerLink"], ["target", "_blank", 1, "btn", "btn-sm", "btn-outline-secondary", 3, "href"], [1, "bi", "bi-download"]], template: function ResumeListComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div")(1, "h3", 0);
            i0.ɵɵtext(2, "Resumes");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "div", 1);
            i0.ɵɵlistener("dragover", function ResumeListComponent_Template_div_dragover_3_listener($event) { $event.preventDefault(); return ctx.dragOver.set(true); })("dragleave", function ResumeListComponent_Template_div_dragleave_3_listener() { return ctx.dragOver.set(false); })("drop", function ResumeListComponent_Template_div_drop_3_listener($event) { return ctx.onDrop($event); });
            i0.ɵɵelementStart(4, "div", 2);
            i0.ɵɵconditionalCreate(5, ResumeListComponent_Conditional_5_Template, 3, 0)(6, ResumeListComponent_Conditional_6_Template, 8, 0);
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(7, ResumeListComponent_Conditional_7_Template, 2, 0, "div", 3)(8, ResumeListComponent_Conditional_8_Template, 2, 0, "p", 4)(9, ResumeListComponent_Conditional_9_Template, 3, 0, "div", 5);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵclassProp("border-primary", ctx.dragOver());
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.uploading() ? 5 : 6);
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.loading() ? 7 : !ctx.resumes().length ? 8 : 9);
        } }, dependencies: [CommonModule, RouterLink, i3.DatePipe], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ResumeListComponent, [{
        type: Component,
        args: [{ selector: 'app-resume-list', standalone: true, imports: [CommonModule, RouterLink], template: "<div>\n  <h3 class=\"fw-bold mb-3\">Resumes</h3>\n\n  <div\n    class=\"upload-dropzone card border-2 border-dashed shadow-sm mb-4 text-center py-5\"\n    [class.border-primary]=\"dragOver()\"\n    (dragover)=\"$event.preventDefault(); dragOver.set(true)\"\n    (dragleave)=\"dragOver.set(false)\"\n    (drop)=\"onDrop($event)\"\n  >\n    <div class=\"card-body\">\n      @if (uploading()) {\n        <div class=\"spinner-border text-primary mb-2\"></div>\n        <p class=\"mb-0\">Uploading and parsing your resume\u2026</p>\n      } @else {\n        <i class=\"bi bi-cloud-arrow-up display-4 text-primary\"></i>\n        <p class=\"mt-2 mb-3\">Drag & drop your resume PDF here, or</p>\n        <label class=\"btn btn-primary\">\n          Choose PDF File\n          <input type=\"file\" accept=\"application/pdf\" class=\"d-none\" (change)=\"onFileSelected($event)\" />\n        </label>\n        <p class=\"text-muted small mt-2 mb-0\">PDF only, up to 10MB</p>\n      }\n    </div>\n  </div>\n\n  @if (loading()) {\n    <div class=\"text-center py-4\"><div class=\"spinner-border text-primary\"></div></div>\n  } @else if (!resumes().length) {\n    <p class=\"text-muted\">No resumes uploaded yet. Upload one above to get started.</p>\n  } @else {\n    <div class=\"row g-3\">\n      @for (r of resumes(); track r._id) {\n        <div class=\"col-md-6 col-lg-4\">\n          <div class=\"card border-0 shadow-sm h-100\">\n            <div class=\"card-body d-flex flex-column\">\n              <div class=\"d-flex justify-content-between align-items-start\">\n                <div>\n                  <h6 class=\"fw-semibold mb-1 text-truncate\" style=\"max-width: 200px;\" [title]=\"r.originalFileName\">{{ r.originalFileName }}</h6>\n                  <span class=\"badge text-bg-light border\">v{{ r.version }}</span>\n                  <span class=\"badge\" [class.text-bg-success]=\"r.status === 'analyzed'\" [class.text-bg-info]=\"r.status === 'parsed'\" [class.text-bg-danger]=\"r.status === 'failed'\" [class.text-bg-secondary]=\"r.status === 'uploaded' || r.status === 'parsing'\">{{ r.status }}</span>\n                </div>\n                <button class=\"btn btn-sm btn-link text-danger p-0\" (click)=\"deleteResume(r._id)\"><i class=\"bi bi-trash\"></i></button>\n              </div>\n              <p class=\"small text-muted mt-2 mb-3\">Uploaded {{ r.createdAt | date: 'medium' }}</p>\n              <div class=\"mt-auto d-flex gap-2\">\n                <a [routerLink]=\"['/resume', r._id]\" class=\"btn btn-sm btn-primary flex-grow-1\">Analyze &amp; View</a>\n                <a [href]=\"downloadUrl(r._id)\" target=\"_blank\" class=\"btn btn-sm btn-outline-secondary\"><i class=\"bi bi-download\"></i></a>\n              </div>\n            </div>\n          </div>\n        </div>\n      }\n    </div>\n  }\n</div>\n" }]
    }], () => [{ type: i1.ResumeService }, { type: i2.ToastService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ResumeListComponent, { className: "ResumeListComponent", filePath: "src/app/features/resume/list/resume-list.component.ts", lineNumber: 14 }); })();
