import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import * as i0 from "@angular/core";
import * as i1 from "../../../core/services/auth.service";
import * as i2 from "@angular/router";
import * as i3 from "../../../core/services/toast.service";
import * as i4 from "@angular/forms";
function RegisterComponent_Conditional_30_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 17);
} }
export class RegisterComponent {
    auth;
    router;
    toast;
    name = '';
    email = '';
    password = '';
    targetJobRole = '';
    loading = signal(false, ...(ngDevMode ? [{ debugName: "loading" }] : []));
    constructor(auth, router, toast) {
        this.auth = auth;
        this.router = router;
        this.toast = toast;
    }
    submit() {
        if (!this.name || !this.email || !this.password) {
            this.toast.show('Please fill in all required fields', 'error');
            return;
        }
        if (this.password.length < 6) {
            this.toast.show('Password must be at least 6 characters', 'error');
            return;
        }
        this.loading.set(true);
        this.auth
            .register({ name: this.name, email: this.email, password: this.password, targetJobRole: this.targetJobRole })
            .subscribe({
            next: () => {
                this.toast.show('Account created! Welcome to ResumeAI Pro.', 'success');
                this.router.navigate(['/dashboard']);
            },
            error: () => this.loading.set(false),
            complete: () => this.loading.set(false),
        });
    }
    static ɵfac = function RegisterComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || RegisterComponent)(i0.ɵɵdirectiveInject(i1.AuthService), i0.ɵɵdirectiveInject(i2.Router), i0.ɵɵdirectiveInject(i3.ToastService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RegisterComponent, selectors: [["app-register"]], decls: 36, vars: 6, consts: [["f", "ngForm"], [1, "auth-wrapper", "d-flex", "align-items-center", "justify-content-center"], [1, "card", "auth-card", "shadow-sm", "border-0"], [1, "card-body", "p-4", "p-md-5"], [1, "text-center", "mb-4"], [1, "bi", "bi-file-earmark-person-fill", "text-primary", "display-5"], [1, "fw-bold", "mt-2", "mb-0"], [1, "text-muted", "small"], [3, "ngSubmit"], [1, "mb-3"], [1, "form-label", "small"], ["type", "text", "name", "name", "required", "", "placeholder", "Jane Doe", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "email", "name", "email", "required", "", "placeholder", "you@example.com", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "password", "name", "password", "required", "", "placeholder", "At least 6 characters", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "text-muted"], ["type", "text", "name", "targetJobRole", "placeholder", "e.g. Frontend Engineer", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "btn", "btn-primary", "w-100", 3, "disabled"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "text-center", "small", "text-muted", "mt-4", "mb-0"], ["routerLink", "/auth/login"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4);
            i0.ɵɵelement(4, "i", 5);
            i0.ɵɵelementStart(5, "h3", 6);
            i0.ɵɵtext(6, "Create your account");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "p", 7);
            i0.ɵɵtext(8, "Start optimizing your resume and practicing interviews");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(9, "form", 8, 0);
            i0.ɵɵlistener("ngSubmit", function RegisterComponent_Template_form_ngSubmit_9_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.submit()); });
            i0.ɵɵelementStart(11, "div", 9)(12, "label", 10);
            i0.ɵɵtext(13, "Full name");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "input", 11);
            i0.ɵɵtwoWayListener("ngModelChange", function RegisterComponent_Template_input_ngModelChange_14_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.name, $event) || (ctx.name = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(15, "div", 9)(16, "label", 10);
            i0.ɵɵtext(17, "Email address");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "input", 12);
            i0.ɵɵtwoWayListener("ngModelChange", function RegisterComponent_Template_input_ngModelChange_18_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.email, $event) || (ctx.email = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(19, "div", 9)(20, "label", 10);
            i0.ɵɵtext(21, "Password");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(22, "input", 13);
            i0.ɵɵtwoWayListener("ngModelChange", function RegisterComponent_Template_input_ngModelChange_22_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.password, $event) || (ctx.password = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(23, "div", 9)(24, "label", 10);
            i0.ɵɵtext(25, "Target job role ");
            i0.ɵɵelementStart(26, "span", 14);
            i0.ɵɵtext(27, "(optional)");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(28, "input", 15);
            i0.ɵɵtwoWayListener("ngModelChange", function RegisterComponent_Template_input_ngModelChange_28_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.targetJobRole, $event) || (ctx.targetJobRole = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(29, "button", 16);
            i0.ɵɵconditionalCreate(30, RegisterComponent_Conditional_30_Template, 1, 0, "span", 17);
            i0.ɵɵtext(31, " Create Account ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(32, "p", 18);
            i0.ɵɵtext(33, " Already have an account? ");
            i0.ɵɵelementStart(34, "a", 19);
            i0.ɵɵtext(35, "Log in");
            i0.ɵɵelementEnd()()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(14);
            i0.ɵɵtwoWayProperty("ngModel", ctx.name);
            i0.ɵɵadvance(4);
            i0.ɵɵtwoWayProperty("ngModel", ctx.email);
            i0.ɵɵadvance(4);
            i0.ɵɵtwoWayProperty("ngModel", ctx.password);
            i0.ɵɵadvance(6);
            i0.ɵɵtwoWayProperty("ngModel", ctx.targetJobRole);
            i0.ɵɵadvance();
            i0.ɵɵproperty("disabled", ctx.loading());
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.loading() ? 30 : -1);
        } }, dependencies: [CommonModule, FormsModule, i4.ɵNgNoValidate, i4.DefaultValueAccessor, i4.NgControlStatus, i4.NgControlStatusGroup, i4.RequiredValidator, i4.NgModel, i4.NgForm, RouterLink], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RegisterComponent, [{
        type: Component,
        args: [{ selector: 'app-register', standalone: true, imports: [CommonModule, FormsModule, RouterLink], template: "<div class=\"auth-wrapper d-flex align-items-center justify-content-center\">\n  <div class=\"card auth-card shadow-sm border-0\">\n    <div class=\"card-body p-4 p-md-5\">\n      <div class=\"text-center mb-4\">\n        <i class=\"bi bi-file-earmark-person-fill text-primary display-5\"></i>\n        <h3 class=\"fw-bold mt-2 mb-0\">Create your account</h3>\n        <p class=\"text-muted small\">Start optimizing your resume and practicing interviews</p>\n      </div>\n\n      <form (ngSubmit)=\"submit()\" #f=\"ngForm\">\n        <div class=\"mb-3\">\n          <label class=\"form-label small\">Full name</label>\n          <input type=\"text\" class=\"form-control\" name=\"name\" [(ngModel)]=\"name\" required placeholder=\"Jane Doe\" />\n        </div>\n        <div class=\"mb-3\">\n          <label class=\"form-label small\">Email address</label>\n          <input type=\"email\" class=\"form-control\" name=\"email\" [(ngModel)]=\"email\" required placeholder=\"you@example.com\" />\n        </div>\n        <div class=\"mb-3\">\n          <label class=\"form-label small\">Password</label>\n          <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"password\" required placeholder=\"At least 6 characters\" />\n        </div>\n        <div class=\"mb-3\">\n          <label class=\"form-label small\">Target job role <span class=\"text-muted\">(optional)</span></label>\n          <input type=\"text\" class=\"form-control\" name=\"targetJobRole\" [(ngModel)]=\"targetJobRole\" placeholder=\"e.g. Frontend Engineer\" />\n        </div>\n        <button type=\"submit\" class=\"btn btn-primary w-100\" [disabled]=\"loading()\">\n          @if (loading()) { <span class=\"spinner-border spinner-border-sm me-2\"></span> }\n          Create Account\n        </button>\n      </form>\n\n      <p class=\"text-center small text-muted mt-4 mb-0\">\n        Already have an account? <a routerLink=\"/auth/login\">Log in</a>\n      </p>\n    </div>\n  </div>\n</div>\n" }]
    }], () => [{ type: i1.AuthService }, { type: i2.Router }, { type: i3.ToastService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(RegisterComponent, { className: "RegisterComponent", filePath: "src/app/features/auth/register/register.component.ts", lineNumber: 14 }); })();
