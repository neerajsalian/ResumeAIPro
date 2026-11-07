import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import * as i0 from "@angular/core";
import * as i1 from "../../../core/services/auth.service";
import * as i2 from "../../../core/services/toast.service";
import * as i3 from "@angular/forms";
function ForgotPasswordComponent_Conditional_9_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 15);
} }
function ForgotPasswordComponent_Conditional_9_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 10);
    i0.ɵɵlistener("ngSubmit", function ForgotPasswordComponent_Conditional_9_Template_form_ngSubmit_0_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.submit()); });
    i0.ɵɵelementStart(1, "div", 11)(2, "label", 12);
    i0.ɵɵtext(3, "Email address");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "input", 13);
    i0.ɵɵtwoWayListener("ngModelChange", function ForgotPasswordComponent_Conditional_9_Template_input_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.email, $event) || (ctx_r1.email = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "button", 14);
    i0.ɵɵconditionalCreate(6, ForgotPasswordComponent_Conditional_9_Conditional_6_Template, 1, 0, "span", 15);
    i0.ɵɵtext(7, " Send Reset Link ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.email);
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r1.loading());
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.loading() ? 6 : -1);
} }
function ForgotPasswordComponent_Conditional_10_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 16)(1, "strong");
    i0.ɵɵtext(2, "Dev mode link:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "a", 17);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("routerLink", ctx_r1.devUrl());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.devUrl());
} }
function ForgotPasswordComponent_Conditional_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵtext(1, " If that email exists, a reset link has been sent. ");
    i0.ɵɵconditionalCreate(2, ForgotPasswordComponent_Conditional_10_Conditional_2_Template, 5, 2, "div", 16);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r1.devUrl() ? 2 : -1);
} }
export class ForgotPasswordComponent {
    auth;
    toast;
    email = '';
    loading = signal(false, ...(ngDevMode ? [{ debugName: "loading" }] : []));
    sent = signal(false, ...(ngDevMode ? [{ debugName: "sent" }] : []));
    devUrl = signal(null, ...(ngDevMode ? [{ debugName: "devUrl" }] : []));
    constructor(auth, toast) {
        this.auth = auth;
        this.toast = toast;
    }
    submit() {
        if (!this.email)
            return;
        this.loading.set(true);
        this.auth.forgotPassword(this.email).subscribe({
            next: (res) => {
                this.sent.set(true);
                if (res?.devResetUrl) {
                    const token = res.devResetUrl.split('/reset-password/')[1];
                    this.devUrl.set(`/auth/reset-password/${token}`);
                }
            },
            error: () => this.toast.show('Something went wrong. Please try again.', 'error'),
            complete: () => this.loading.set(false),
        });
    }
    static ɵfac = function ForgotPasswordComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ForgotPasswordComponent)(i0.ɵɵdirectiveInject(i1.AuthService), i0.ɵɵdirectiveInject(i2.ToastService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ForgotPasswordComponent, selectors: [["app-forgot-password"]], decls: 14, vars: 1, consts: [[1, "auth-wrapper", "d-flex", "align-items-center", "justify-content-center"], [1, "card", "auth-card", "shadow-sm", "border-0"], [1, "card-body", "p-4", "p-md-5"], [1, "text-center", "mb-4"], [1, "bi", "bi-key-fill", "text-primary", "display-5"], [1, "fw-bold", "mt-2", "mb-0"], [1, "text-muted", "small"], [1, "alert", "alert-success", "small"], [1, "text-center", "small", "text-muted", "mt-4", "mb-0"], ["routerLink", "/auth/login"], [3, "ngSubmit"], [1, "mb-3"], [1, "form-label", "small"], ["type", "email", "name", "email", "required", "", "placeholder", "you@example.com", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "btn", "btn-primary", "w-100", 3, "disabled"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "mt-2"], [3, "routerLink"]], template: function ForgotPasswordComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
            i0.ɵɵelement(4, "i", 4);
            i0.ɵɵelementStart(5, "h3", 5);
            i0.ɵɵtext(6, "Forgot password");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "p", 6);
            i0.ɵɵtext(8, "We'll send you a reset link");
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(9, ForgotPasswordComponent_Conditional_9_Template, 8, 3, "form")(10, ForgotPasswordComponent_Conditional_10_Template, 3, 1, "div", 7);
            i0.ɵɵelementStart(11, "p", 8)(12, "a", 9);
            i0.ɵɵtext(13, "Back to login");
            i0.ɵɵelementEnd()()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(9);
            i0.ɵɵconditional(!ctx.sent() ? 9 : 10);
        } }, dependencies: [CommonModule, FormsModule, i3.ɵNgNoValidate, i3.DefaultValueAccessor, i3.NgControlStatus, i3.NgControlStatusGroup, i3.RequiredValidator, i3.NgModel, i3.NgForm, RouterLink], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ForgotPasswordComponent, [{
        type: Component,
        args: [{
                selector: 'app-forgot-password',
                standalone: true,
                imports: [CommonModule, FormsModule, RouterLink],
                template: `
    <div class="auth-wrapper d-flex align-items-center justify-content-center">
      <div class="card auth-card shadow-sm border-0">
        <div class="card-body p-4 p-md-5">
          <div class="text-center mb-4">
            <i class="bi bi-key-fill text-primary display-5"></i>
            <h3 class="fw-bold mt-2 mb-0">Forgot password</h3>
            <p class="text-muted small">We'll send you a reset link</p>
          </div>

          @if (!sent()) {
            <form (ngSubmit)="submit()">
              <div class="mb-3">
                <label class="form-label small">Email address</label>
                <input type="email" class="form-control" name="email" [(ngModel)]="email" required placeholder="you@example.com" />
              </div>
              <button type="submit" class="btn btn-primary w-100" [disabled]="loading()">
                @if (loading()) { <span class="spinner-border spinner-border-sm me-2"></span> }
                Send Reset Link
              </button>
            </form>
          } @else {
            <div class="alert alert-success small">
              If that email exists, a reset link has been sent.
              @if (devUrl()) {
                <div class="mt-2">
                  <strong>Dev mode link:</strong>
                  <a [routerLink]="devUrl()">{{ devUrl() }}</a>
                </div>
              }
            </div>
          }

          <p class="text-center small text-muted mt-4 mb-0">
            <a routerLink="/auth/login">Back to login</a>
          </p>
        </div>
      </div>
    </div>
  `,
            }]
    }], () => [{ type: i1.AuthService }, { type: i2.ToastService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ForgotPasswordComponent, { className: "ForgotPasswordComponent", filePath: "src/app/features/auth/forgot-password/forgot-password.component.ts", lineNumber: 53 }); })();
