import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import * as i0 from "@angular/core";
import * as i1 from "../../../core/services/auth.service";
import * as i2 from "@angular/router";
import * as i3 from "../../../core/services/toast.service";
import * as i4 from "@angular/forms";
function LoginComponent_Conditional_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 16);
} }
export class LoginComponent {
    auth;
    router;
    toast;
    email = '';
    password = '';
    loading = signal(false, ...(ngDevMode ? [{ debugName: "loading" }] : []));
    constructor(auth, router, toast) {
        this.auth = auth;
        this.router = router;
        this.toast = toast;
    }
    submit() {
        if (!this.email || !this.password) {
            this.toast.show('Please enter your email and password', 'error');
            return;
        }
        this.loading.set(true);
        this.auth.login(this.email, this.password).subscribe({
            next: () => {
                this.toast.show('Welcome back!', 'success');
                this.router.navigate(['/dashboard']);
            },
            error: () => this.loading.set(false),
            complete: () => this.loading.set(false),
        });
    }
    static ɵfac = function LoginComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || LoginComponent)(i0.ɵɵdirectiveInject(i1.AuthService), i0.ɵɵdirectiveInject(i2.Router), i0.ɵɵdirectiveInject(i3.ToastService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LoginComponent, selectors: [["app-login"]], decls: 29, vars: 4, consts: [["f", "ngForm"], [1, "auth-wrapper", "d-flex", "align-items-center", "justify-content-center"], [1, "card", "auth-card", "shadow-sm", "border-0"], [1, "card-body", "p-4", "p-md-5"], [1, "text-center", "mb-4"], [1, "bi", "bi-file-earmark-person-fill", "text-primary", "display-5"], [1, "fw-bold", "mt-2", "mb-0"], [1, "text-muted", "small"], [3, "ngSubmit"], [1, "mb-3"], [1, "form-label", "small"], ["type", "email", "name", "email", "required", "", "autocomplete", "email", "placeholder", "you@example.com", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "password", "name", "password", "required", "", "autocomplete", "current-password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "d-flex", "justify-content-end", "mb-3"], ["routerLink", "/auth/forgot-password", 1, "small"], ["type", "submit", 1, "btn", "btn-primary", "w-100", 3, "disabled"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "text-center", "small", "text-muted", "mt-4", "mb-0"], ["routerLink", "/auth/register"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4);
            i0.ɵɵelement(4, "i", 5);
            i0.ɵɵelementStart(5, "h3", 6);
            i0.ɵɵtext(6, "Welcome back");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "p", 7);
            i0.ɵɵtext(8, "Log in to continue to ResumeAI Pro");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(9, "form", 8, 0);
            i0.ɵɵlistener("ngSubmit", function LoginComponent_Template_form_ngSubmit_9_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.submit()); });
            i0.ɵɵelementStart(11, "div", 9)(12, "label", 10);
            i0.ɵɵtext(13, "Email address");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "input", 11);
            i0.ɵɵtwoWayListener("ngModelChange", function LoginComponent_Template_input_ngModelChange_14_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.email, $event) || (ctx.email = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(15, "div", 9)(16, "label", 10);
            i0.ɵɵtext(17, "Password");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "input", 12);
            i0.ɵɵtwoWayListener("ngModelChange", function LoginComponent_Template_input_ngModelChange_18_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.password, $event) || (ctx.password = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(19, "div", 13)(20, "a", 14);
            i0.ɵɵtext(21, "Forgot password?");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(22, "button", 15);
            i0.ɵɵconditionalCreate(23, LoginComponent_Conditional_23_Template, 1, 0, "span", 16);
            i0.ɵɵtext(24, " Log In ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(25, "p", 17);
            i0.ɵɵtext(26, " Don't have an account? ");
            i0.ɵɵelementStart(27, "a", 18);
            i0.ɵɵtext(28, "Sign up");
            i0.ɵɵelementEnd()()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(14);
            i0.ɵɵtwoWayProperty("ngModel", ctx.email);
            i0.ɵɵadvance(4);
            i0.ɵɵtwoWayProperty("ngModel", ctx.password);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("disabled", ctx.loading());
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.loading() ? 23 : -1);
        } }, dependencies: [CommonModule, FormsModule, i4.ɵNgNoValidate, i4.DefaultValueAccessor, i4.NgControlStatus, i4.NgControlStatusGroup, i4.RequiredValidator, i4.NgModel, i4.NgForm, RouterLink], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LoginComponent, [{
        type: Component,
        args: [{ selector: 'app-login', standalone: true, imports: [CommonModule, FormsModule, RouterLink], template: "<div class=\"auth-wrapper d-flex align-items-center justify-content-center\">\n  <div class=\"card auth-card shadow-sm border-0\">\n    <div class=\"card-body p-4 p-md-5\">\n      <div class=\"text-center mb-4\">\n        <i class=\"bi bi-file-earmark-person-fill text-primary display-5\"></i>\n        <h3 class=\"fw-bold mt-2 mb-0\">Welcome back</h3>\n        <p class=\"text-muted small\">Log in to continue to ResumeAI Pro</p>\n      </div>\n\n      <form (ngSubmit)=\"submit()\" #f=\"ngForm\">\n        <div class=\"mb-3\">\n          <label class=\"form-label small\">Email address</label>\n          <input type=\"email\" class=\"form-control\" name=\"email\" [(ngModel)]=\"email\" required autocomplete=\"email\" placeholder=\"you@example.com\" />\n        </div>\n        <div class=\"mb-3\">\n          <label class=\"form-label small\">Password</label>\n          <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"password\" required autocomplete=\"current-password\" placeholder=\"\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\" />\n        </div>\n        <div class=\"d-flex justify-content-end mb-3\">\n          <a routerLink=\"/auth/forgot-password\" class=\"small\">Forgot password?</a>\n        </div>\n        <button type=\"submit\" class=\"btn btn-primary w-100\" [disabled]=\"loading()\">\n          @if (loading()) { <span class=\"spinner-border spinner-border-sm me-2\"></span> }\n          Log In\n        </button>\n      </form>\n\n      <p class=\"text-center small text-muted mt-4 mb-0\">\n        Don't have an account? <a routerLink=\"/auth/register\">Sign up</a>\n      </p>\n    </div>\n  </div>\n</div>\n" }]
    }], () => [{ type: i1.AuthService }, { type: i2.Router }, { type: i3.ToastService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/features/auth/login/login.component.ts", lineNumber: 14 }); })();
