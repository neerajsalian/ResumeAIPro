import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import * as i0 from "@angular/core";
import * as i1 from "../../../core/services/auth.service";
import * as i2 from "../../../core/services/theme.service";
function NavbarComponent_Conditional_10_Conditional_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li")(1, "a", 19);
    i0.ɵɵelement(2, "i", 20);
    i0.ɵɵtext(3, "Admin Panel");
    i0.ɵɵelementEnd()();
} }
function NavbarComponent_Conditional_10_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 8)(1, "button", 9);
    i0.ɵɵelement(2, "i", 10);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "ul", 11)(5, "li")(6, "a", 12);
    i0.ɵɵelement(7, "i", 13);
    i0.ɵɵtext(8, "Dashboard");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "li")(10, "a", 14);
    i0.ɵɵelement(11, "i", 15);
    i0.ɵɵtext(12, "Profile");
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(13, NavbarComponent_Conditional_10_Conditional_13_Template, 4, 0, "li");
    i0.ɵɵelementStart(14, "li");
    i0.ɵɵelement(15, "hr", 16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "li")(17, "button", 17);
    i0.ɵɵlistener("click", function NavbarComponent_Conditional_10_Template_button_click_17_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.auth.logout()); });
    i0.ɵɵelement(18, "i", 18);
    i0.ɵɵtext(19, "Logout");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", (tmp_1_0 = ctx_r1.auth.currentUser()) == null ? null : tmp_1_0.name, " ");
    i0.ɵɵadvance(10);
    i0.ɵɵconditional(ctx_r1.auth.isAdmin() ? 13 : -1);
} }
function NavbarComponent_Conditional_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 21);
    i0.ɵɵtext(1, "Login");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "a", 22);
    i0.ɵɵtext(3, "Sign Up");
    i0.ɵɵelementEnd();
} }
export class NavbarComponent {
    auth;
    theme;
    constructor(auth, theme) {
        this.auth = auth;
        this.theme = theme;
    }
    static ɵfac = function NavbarComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || NavbarComponent)(i0.ɵɵdirectiveInject(i1.AuthService), i0.ɵɵdirectiveInject(i2.ThemeService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 12, vars: 5, consts: [[1, "navbar", "navbar-expand-lg", "border-bottom", "sticky-top", "app-navbar", "px-3"], [1, "container-fluid"], ["routerLink", "/", 1, "navbar-brand", "fw-bold", "d-flex", "align-items-center", "gap-2"], [1, "bi", "bi-file-earmark-person-fill", "text-primary"], [1, "text-primary"], [1, "d-flex", "align-items-center", "gap-2", "ms-auto"], ["title", "Toggle theme", 1, "btn", "btn-sm", "btn-outline-secondary", 3, "click"], [1, "bi"], [1, "dropdown"], ["data-bs-toggle", "dropdown", 1, "btn", "btn-sm", "btn-primary", "dropdown-toggle", "d-flex", "align-items-center", "gap-2"], [1, "bi", "bi-person-circle"], [1, "dropdown-menu", "dropdown-menu-end"], ["routerLink", "/dashboard", 1, "dropdown-item"], [1, "bi", "bi-speedometer2", "me-2"], ["routerLink", "/profile", 1, "dropdown-item"], [1, "bi", "bi-person", "me-2"], [1, "dropdown-divider"], [1, "dropdown-item", "text-danger", 3, "click"], [1, "bi", "bi-box-arrow-right", "me-2"], ["routerLink", "/admin", 1, "dropdown-item"], [1, "bi", "bi-shield-lock", "me-2"], ["routerLink", "/auth/login", 1, "btn", "btn-sm", "btn-outline-primary"], ["routerLink", "/auth/register", 1, "btn", "btn-sm", "btn-primary"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "nav", 0)(1, "div", 1)(2, "a", 2);
            i0.ɵɵelement(3, "i", 3);
            i0.ɵɵtext(4, " ResumeAI ");
            i0.ɵɵelementStart(5, "span", 4);
            i0.ɵɵtext(6, "Pro");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(7, "div", 5)(8, "button", 6);
            i0.ɵɵlistener("click", function NavbarComponent_Template_button_click_8_listener() { return ctx.theme.toggle(); });
            i0.ɵɵelement(9, "i", 7);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(10, NavbarComponent_Conditional_10_Template, 20, 2, "div", 8)(11, NavbarComponent_Conditional_11_Template, 4, 0);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(9);
            i0.ɵɵclassProp("bi-moon-stars", ctx.theme.theme() === "light")("bi-sun", ctx.theme.theme() === "dark");
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.auth.isLoggedIn() ? 10 : 11);
        } }, dependencies: [CommonModule, RouterLink], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NavbarComponent, [{
        type: Component,
        args: [{ selector: 'app-navbar', standalone: true, imports: [CommonModule, RouterLink], template: "<nav class=\"navbar navbar-expand-lg border-bottom sticky-top app-navbar px-3\">\n  <div class=\"container-fluid\">\n    <a class=\"navbar-brand fw-bold d-flex align-items-center gap-2\" routerLink=\"/\">\n      <i class=\"bi bi-file-earmark-person-fill text-primary\"></i>\n      ResumeAI <span class=\"text-primary\">Pro</span>\n    </a>\n\n    <div class=\"d-flex align-items-center gap-2 ms-auto\">\n      <button class=\"btn btn-sm btn-outline-secondary\" (click)=\"theme.toggle()\" title=\"Toggle theme\">\n        <i class=\"bi\" [class.bi-moon-stars]=\"theme.theme() === 'light'\" [class.bi-sun]=\"theme.theme() === 'dark'\"></i>\n      </button>\n\n      @if (auth.isLoggedIn()) {\n        <div class=\"dropdown\">\n          <button class=\"btn btn-sm btn-primary dropdown-toggle d-flex align-items-center gap-2\" data-bs-toggle=\"dropdown\">\n            <i class=\"bi bi-person-circle\"></i>\n            {{ auth.currentUser()?.name }}\n          </button>\n          <ul class=\"dropdown-menu dropdown-menu-end\">\n            <li><a class=\"dropdown-item\" routerLink=\"/dashboard\"><i class=\"bi bi-speedometer2 me-2\"></i>Dashboard</a></li>\n            <li><a class=\"dropdown-item\" routerLink=\"/profile\"><i class=\"bi bi-person me-2\"></i>Profile</a></li>\n            @if (auth.isAdmin()) {\n              <li><a class=\"dropdown-item\" routerLink=\"/admin\"><i class=\"bi bi-shield-lock me-2\"></i>Admin Panel</a></li>\n            }\n            <li><hr class=\"dropdown-divider\" /></li>\n            <li><button class=\"dropdown-item text-danger\" (click)=\"auth.logout()\"><i class=\"bi bi-box-arrow-right me-2\"></i>Logout</button></li>\n          </ul>\n        </div>\n      } @else {\n        <a routerLink=\"/auth/login\" class=\"btn btn-sm btn-outline-primary\">Login</a>\n        <a routerLink=\"/auth/register\" class=\"btn btn-sm btn-primary\">Sign Up</a>\n      }\n    </div>\n  </div>\n</nav>\n" }]
    }], () => [{ type: i1.AuthService }, { type: i2.ThemeService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(NavbarComponent, { className: "NavbarComponent", filePath: "src/app/shared/components/navbar/navbar.component.ts", lineNumber: 13 }); })();
