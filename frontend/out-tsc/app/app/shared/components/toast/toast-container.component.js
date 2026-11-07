import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "../../../core/services/toast.service";
const _forTrack0 = ($index, $item) => $item.id;
function ToastContainerComponent_For_2_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵdomElementStart(0, "div", 2)(1, "div", 3)(2, "div", 4);
    i0.ɵɵtext(3);
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(4, "button", 5);
    i0.ɵɵdomListener("click", function ToastContainerComponent_For_2_Template_button_click_4_listener() { const t_r2 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.toastService.dismiss(t_r2.id)); });
    i0.ɵɵdomElementEnd()()();
} if (rf & 2) {
    const t_r2 = ctx.$implicit;
    i0.ɵɵclassProp("text-bg-danger", t_r2.type === "error")("text-bg-success", t_r2.type === "success")("text-bg-primary", t_r2.type === "info");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(t_r2.message);
} }
export class ToastContainerComponent {
    toastService;
    constructor(toastService) {
        this.toastService = toastService;
    }
    static ɵfac = function ToastContainerComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ToastContainerComponent)(i0.ɵɵdirectiveInject(i1.ToastService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ToastContainerComponent, selectors: [["app-toast-container"]], decls: 3, vars: 0, consts: [[1, "toast-stack", "position-fixed", "top-0", "end-0", "p-3", 2, "z-index", "2000"], [1, "toast", "show", "mb-2", "border-0", 3, "text-bg-danger", "text-bg-success", "text-bg-primary"], [1, "toast", "show", "mb-2", "border-0"], [1, "d-flex"], [1, "toast-body"], ["type", "button", 1, "btn-close", "btn-close-white", "me-2", "m-auto", 3, "click"]], template: function ToastContainerComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵdomElementStart(0, "div", 0);
            i0.ɵɵrepeaterCreate(1, ToastContainerComponent_For_2_Template, 5, 7, "div", 1, _forTrack0);
            i0.ɵɵdomElementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵrepeater(ctx.toastService.toasts());
        } }, dependencies: [CommonModule], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ToastContainerComponent, [{
        type: Component,
        args: [{
                selector: 'app-toast-container',
                standalone: true,
                imports: [CommonModule],
                template: `
    <div class="toast-stack position-fixed top-0 end-0 p-3" style="z-index: 2000;">
      @for (t of toastService.toasts(); track t.id) {
        <div class="toast show mb-2 border-0" [class.text-bg-danger]="t.type === 'error'" [class.text-bg-success]="t.type === 'success'" [class.text-bg-primary]="t.type === 'info'">
          <div class="d-flex">
            <div class="toast-body">{{ t.message }}</div>
            <button type="button" class="btn-close btn-close-white me-2 m-auto" (click)="toastService.dismiss(t.id)"></button>
          </div>
        </div>
      }
    </div>
  `,
            }]
    }], () => [{ type: i1.ToastService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ToastContainerComponent, { className: "ToastContainerComponent", filePath: "src/app/shared/components/toast/toast-container.component.ts", lineNumber: 22 }); })();
