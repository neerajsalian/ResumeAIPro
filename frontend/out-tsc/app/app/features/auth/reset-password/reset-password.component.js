import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../../../core/services/auth.service";
import * as i3 from "../../../core/services/toast.service";
import * as i4 from "@angular/forms";
function ResetPasswordComponent_Conditional_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 11);
} }
export class ResetPasswordComponent {
    route;
    auth;
    router;
    toast;
    password = '';
    loading = signal(false, ...(ngDevMode ? [{ debugName: "loading" }] : []));
    token = '';
    constructor(route, auth, router, toast) {
        this.route = route;
        this.auth = auth;
        this.router = router;
        this.toast = toast;
        this.token = this.route.snapshot.paramMap.get('token') || '';
    }
    submit() {
        if (this.password.length < 6) {
            this.toast.show('Password must be at least 6 characters', 'error');
            return;
        }
        this.loading.set(true);
        this.auth.resetPassword(this.token, this.password).subscribe({
            next: () => {
                this.toast.show('Password reset successfully. Please log in.', 'success');
                this.router.navigate(['/auth/login']);
            },
            error: () => this.loading.set(false),
            complete: () => this.loading.set(false),
        });
    }
    static ɵfac = function ResetPasswordComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ResetPasswordComponent)(i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(i2.AuthService), i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i3.ToastService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ResetPasswordComponent, selectors: [["app-reset-password"]], decls: 18, vars: 3, consts: [[1, "auth-wrapper", "d-flex", "align-items-center", "justify-content-center"], [1, "card", "auth-card", "shadow-sm", "border-0"], [1, "card-body", "p-4", "p-md-5"], [1, "text-center", "mb-4"], [1, "bi", "bi-shield-lock-fill", "text-primary", "display-5"], [1, "fw-bold", "mt-2", "mb-0"], [3, "ngSubmit"], [1, "mb-3"], [1, "form-label", "small"], ["type", "password", "name", "password", "required", "", "placeholder", "At least 6 characters", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "btn", "btn-primary", "w-100", 3, "disabled"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "text-center", "small", "text-muted", "mt-4", "mb-0"], ["routerLink", "/auth/login"]], template: function ResetPasswordComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
            i0.ɵɵelement(4, "i", 4);
            i0.ɵɵelementStart(5, "h3", 5);
            i0.ɵɵtext(6, "Set a new password");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(7, "form", 6);
            i0.ɵɵlistener("ngSubmit", function ResetPasswordComponent_Template_form_ngSubmit_7_listener() { return ctx.submit(); });
            i0.ɵɵelementStart(8, "div", 7)(9, "label", 8);
            i0.ɵɵtext(10, "New password");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "input", 9);
            i0.ɵɵtwoWayListener("ngModelChange", function ResetPasswordComponent_Template_input_ngModelChange_11_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.password, $event) || (ctx.password = $event); return $event; });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(12, "button", 10);
            i0.ɵɵconditionalCreate(13, ResetPasswordComponent_Conditional_13_Template, 1, 0, "span", 11);
            i0.ɵɵtext(14, " Reset Password ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(15, "p", 12)(16, "a", 13);
            i0.ɵɵtext(17, "Back to login");
            i0.ɵɵelementEnd()()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(11);
            i0.ɵɵtwoWayProperty("ngModel", ctx.password);
            i0.ɵɵadvance();
            i0.ɵɵproperty("disabled", ctx.loading());
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.loading() ? 13 : -1);
        } }, dependencies: [CommonModule, FormsModule, i4.ɵNgNoValidate, i4.DefaultValueAccessor, i4.NgControlStatus, i4.NgControlStatusGroup, i4.RequiredValidator, i4.NgModel, i4.NgForm, RouterLink], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ResetPasswordComponent, [{
        type: Component,
        args: [{
                selector: 'app-reset-password',
                standalone: true,
                imports: [CommonModule, FormsModule, RouterLink],
                template: `
    <div class="auth-wrapper d-flex align-items-center justify-content-center">
      <div class="card auth-card shadow-sm border-0">
        <div class="card-body p-4 p-md-5">
          <div class="text-center mb-4">
            <i class="bi bi-shield-lock-fill text-primary display-5"></i>
            <h3 class="fw-bold mt-2 mb-0">Set a new password</h3>
          </div>
          <form (ngSubmit)="submit()">
            <div class="mb-3">
              <label class="form-label small">New password</label>
              <input type="password" class="form-control" name="password" [(ngModel)]="password" required placeholder="At least 6 characters" />
            </div>
            <button type="submit" class="btn btn-primary w-100" [disabled]="loading()">
              @if (loading()) { <span class="spinner-border spinner-border-sm me-2"></span> }
              Reset Password
            </button>
          </form>
          <p class="text-center small text-muted mt-4 mb-0">
            <a routerLink="/auth/login">Back to login</a>
          </p>
        </div>
      </div>
    </div>
  `,
            }]
    }], () => [{ type: i1.ActivatedRoute }, { type: i2.AuthService }, { type: i1.Router }, { type: i3.ToastService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ResetPasswordComponent, { className: "ResetPasswordComponent", filePath: "src/app/features/auth/reset-password/reset-password.component.ts", lineNumber: 38 }); })();
