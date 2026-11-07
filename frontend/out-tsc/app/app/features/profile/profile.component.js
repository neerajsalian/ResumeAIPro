import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "../../core/services/auth.service";
import * as i2 from "../../core/services/toast.service";
import * as i3 from "@angular/forms";
function ProfileComponent_Conditional_34_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 13);
} }
function ProfileComponent_Conditional_51_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 13);
} }
export class ProfileComponent {
    auth;
    toast;
    saving = signal(false, ...(ngDevMode ? [{ debugName: "saving" }] : []));
    changingPassword = signal(false, ...(ngDevMode ? [{ debugName: "changingPassword" }] : []));
    name = '';
    phone = '';
    targetJobRole = '';
    location = '';
    bio = '';
    currentPassword = '';
    newPassword = '';
    constructor(auth, toast) {
        this.auth = auth;
        this.toast = toast;
        const user = this.auth.currentUser();
        this.name = user?.name || '';
        this.phone = user?.phone || '';
        this.targetJobRole = user?.targetJobRole || '';
        this.location = user?.location || '';
        this.bio = user?.bio || '';
    }
    saveProfile() {
        this.saving.set(true);
        this.auth
            .updateProfile({ name: this.name, phone: this.phone, targetJobRole: this.targetJobRole, location: this.location, bio: this.bio })
            .subscribe({
            next: () => this.toast.show('Profile updated', 'success'),
            error: () => this.saving.set(false),
            complete: () => this.saving.set(false),
        });
    }
    changePassword() {
        if (this.newPassword.length < 6) {
            this.toast.show('New password must be at least 6 characters', 'error');
            return;
        }
        this.changingPassword.set(true);
        this.auth.changePassword(this.currentPassword, this.newPassword).subscribe({
            next: () => {
                this.toast.show('Password changed successfully', 'success');
                this.currentPassword = '';
                this.newPassword = '';
            },
            error: () => this.changingPassword.set(false),
            complete: () => this.changingPassword.set(false),
        });
    }
    static ɵfac = function ProfileComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ProfileComponent)(i0.ɵɵdirectiveInject(i1.AuthService), i0.ɵɵdirectiveInject(i2.ToastService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProfileComponent, selectors: [["app-profile"]], decls: 53, vars: 12, consts: [[1, "mx-auto", 2, "max-width", "700px"], [1, "fw-bold", "mb-3"], [1, "card", "border-0", "shadow-sm", "mb-4"], [1, "card-body"], [1, "text-muted", "mb-3"], [1, "row", "g-3"], [1, "col-md-6"], [1, "form-label", "small"], ["type", "text", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "disabled", "", 1, "form-control", 3, "value"], [1, "col-12"], ["rows", "3", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "btn", "btn-primary", 3, "click", "disabled"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "card", "border-0", "shadow-sm"], ["type", "password", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "btn", "btn-outline-primary", 3, "click", "disabled"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "h3", 1);
            i0.ɵɵtext(2, "Profile");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "div", 2)(4, "div", 3)(5, "h6", 4);
            i0.ɵɵtext(6, "Personal Information");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "div", 5)(8, "div", 6)(9, "label", 7);
            i0.ɵɵtext(10, "Full Name");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "input", 8);
            i0.ɵɵtwoWayListener("ngModelChange", function ProfileComponent_Template_input_ngModelChange_11_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.name, $event) || (ctx.name = $event); return $event; });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(12, "div", 6)(13, "label", 7);
            i0.ɵɵtext(14, "Email");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(15, "input", 9);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "div", 6)(17, "label", 7);
            i0.ɵɵtext(18, "Phone");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "input", 8);
            i0.ɵɵtwoWayListener("ngModelChange", function ProfileComponent_Template_input_ngModelChange_19_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.phone, $event) || (ctx.phone = $event); return $event; });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(20, "div", 6)(21, "label", 7);
            i0.ɵɵtext(22, "Target Job Role");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(23, "input", 8);
            i0.ɵɵtwoWayListener("ngModelChange", function ProfileComponent_Template_input_ngModelChange_23_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.targetJobRole, $event) || (ctx.targetJobRole = $event); return $event; });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(24, "div", 6)(25, "label", 7);
            i0.ɵɵtext(26, "Location");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(27, "input", 8);
            i0.ɵɵtwoWayListener("ngModelChange", function ProfileComponent_Template_input_ngModelChange_27_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.location, $event) || (ctx.location = $event); return $event; });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(28, "div", 10)(29, "label", 7);
            i0.ɵɵtext(30, "Bio");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(31, "textarea", 11);
            i0.ɵɵtwoWayListener("ngModelChange", function ProfileComponent_Template_textarea_ngModelChange_31_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.bio, $event) || (ctx.bio = $event); return $event; });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(32, "div", 10)(33, "button", 12);
            i0.ɵɵlistener("click", function ProfileComponent_Template_button_click_33_listener() { return ctx.saveProfile(); });
            i0.ɵɵconditionalCreate(34, ProfileComponent_Conditional_34_Template, 1, 0, "span", 13);
            i0.ɵɵtext(35, " Save Changes ");
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵelementStart(36, "div", 14)(37, "div", 3)(38, "h6", 4);
            i0.ɵɵtext(39, "Change Password");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(40, "div", 5)(41, "div", 6)(42, "label", 7);
            i0.ɵɵtext(43, "Current Password");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(44, "input", 15);
            i0.ɵɵtwoWayListener("ngModelChange", function ProfileComponent_Template_input_ngModelChange_44_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.currentPassword, $event) || (ctx.currentPassword = $event); return $event; });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(45, "div", 6)(46, "label", 7);
            i0.ɵɵtext(47, "New Password");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(48, "input", 15);
            i0.ɵɵtwoWayListener("ngModelChange", function ProfileComponent_Template_input_ngModelChange_48_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.newPassword, $event) || (ctx.newPassword = $event); return $event; });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(49, "div", 10)(50, "button", 16);
            i0.ɵɵlistener("click", function ProfileComponent_Template_button_click_50_listener() { return ctx.changePassword(); });
            i0.ɵɵconditionalCreate(51, ProfileComponent_Conditional_51_Template, 1, 0, "span", 13);
            i0.ɵɵtext(52, " Update Password ");
            i0.ɵɵelementEnd()()()()()();
        } if (rf & 2) {
            let tmp_1_0;
            i0.ɵɵadvance(11);
            i0.ɵɵtwoWayProperty("ngModel", ctx.name);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("value", (tmp_1_0 = ctx.auth.currentUser()) == null ? null : tmp_1_0.email);
            i0.ɵɵadvance(4);
            i0.ɵɵtwoWayProperty("ngModel", ctx.phone);
            i0.ɵɵadvance(4);
            i0.ɵɵtwoWayProperty("ngModel", ctx.targetJobRole);
            i0.ɵɵadvance(4);
            i0.ɵɵtwoWayProperty("ngModel", ctx.location);
            i0.ɵɵadvance(4);
            i0.ɵɵtwoWayProperty("ngModel", ctx.bio);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("disabled", ctx.saving());
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.saving() ? 34 : -1);
            i0.ɵɵadvance(10);
            i0.ɵɵtwoWayProperty("ngModel", ctx.currentPassword);
            i0.ɵɵadvance(4);
            i0.ɵɵtwoWayProperty("ngModel", ctx.newPassword);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("disabled", ctx.changingPassword());
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.changingPassword() ? 51 : -1);
        } }, dependencies: [CommonModule, FormsModule, i3.DefaultValueAccessor, i3.NgControlStatus, i3.NgModel], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProfileComponent, [{
        type: Component,
        args: [{ selector: 'app-profile', standalone: true, imports: [CommonModule, FormsModule], template: "<div class=\"mx-auto\" style=\"max-width: 700px;\">\n  <h3 class=\"fw-bold mb-3\">Profile</h3>\n\n  <div class=\"card border-0 shadow-sm mb-4\">\n    <div class=\"card-body\">\n      <h6 class=\"text-muted mb-3\">Personal Information</h6>\n      <div class=\"row g-3\">\n        <div class=\"col-md-6\">\n          <label class=\"form-label small\">Full Name</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"name\" />\n        </div>\n        <div class=\"col-md-6\">\n          <label class=\"form-label small\">Email</label>\n          <input type=\"text\" class=\"form-control\" [value]=\"auth.currentUser()?.email\" disabled />\n        </div>\n        <div class=\"col-md-6\">\n          <label class=\"form-label small\">Phone</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"phone\" />\n        </div>\n        <div class=\"col-md-6\">\n          <label class=\"form-label small\">Target Job Role</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"targetJobRole\" />\n        </div>\n        <div class=\"col-md-6\">\n          <label class=\"form-label small\">Location</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"location\" />\n        </div>\n        <div class=\"col-12\">\n          <label class=\"form-label small\">Bio</label>\n          <textarea class=\"form-control\" rows=\"3\" [(ngModel)]=\"bio\"></textarea>\n        </div>\n        <div class=\"col-12\">\n          <button class=\"btn btn-primary\" (click)=\"saveProfile()\" [disabled]=\"saving()\">\n            @if (saving()) { <span class=\"spinner-border spinner-border-sm me-2\"></span> } Save Changes\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"card border-0 shadow-sm\">\n    <div class=\"card-body\">\n      <h6 class=\"text-muted mb-3\">Change Password</h6>\n      <div class=\"row g-3\">\n        <div class=\"col-md-6\">\n          <label class=\"form-label small\">Current Password</label>\n          <input type=\"password\" class=\"form-control\" [(ngModel)]=\"currentPassword\" />\n        </div>\n        <div class=\"col-md-6\">\n          <label class=\"form-label small\">New Password</label>\n          <input type=\"password\" class=\"form-control\" [(ngModel)]=\"newPassword\" />\n        </div>\n        <div class=\"col-12\">\n          <button class=\"btn btn-outline-primary\" (click)=\"changePassword()\" [disabled]=\"changingPassword()\">\n            @if (changingPassword()) { <span class=\"spinner-border spinner-border-sm me-2\"></span> } Update Password\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n" }]
    }], () => [{ type: i1.AuthService }, { type: i2.ToastService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ProfileComponent, { className: "ProfileComponent", filePath: "src/app/features/profile/profile.component.ts", lineNumber: 13 }); })();
