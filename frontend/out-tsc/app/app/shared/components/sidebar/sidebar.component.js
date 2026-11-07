import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import * as i0 from "@angular/core";
import * as i1 from "../../../core/services/auth.service";
function SidebarComponent_Conditional_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "hr");
    i0.ɵɵelementStart(1, "a", 14);
    i0.ɵɵelement(2, "i", 15);
    i0.ɵɵtext(3, "Admin Panel");
    i0.ɵɵelementEnd();
} }
export class SidebarComponent {
    auth;
    constructor(auth) {
        this.auth = auth;
    }
    static ɵfac = function SidebarComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SidebarComponent)(i0.ɵɵdirectiveInject(i1.AuthService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SidebarComponent, selectors: [["app-sidebar"]], decls: 21, vars: 1, consts: [[1, "app-sidebar", "p-3", "border-end"], [1, "nav", "flex-column", "gap-1"], ["routerLink", "/dashboard", "routerLinkActive", "active", 1, "nav-link", "sidebar-link"], [1, "bi", "bi-speedometer2", "me-2"], ["routerLink", "/resume", "routerLinkActive", "active", 1, "nav-link", "sidebar-link"], [1, "bi", "bi-file-earmark-text", "me-2"], ["routerLink", "/job-match", "routerLinkActive", "active", 1, "nav-link", "sidebar-link"], [1, "bi", "bi-bullseye", "me-2"], ["routerLink", "/interview", "routerLinkActive", "active", 1, "nav-link", "sidebar-link"], [1, "bi", "bi-mic", "me-2"], ["routerLink", "/career", "routerLinkActive", "active", 1, "nav-link", "sidebar-link"], [1, "bi", "bi-signpost-2", "me-2"], ["routerLink", "/profile", "routerLinkActive", "active", 1, "nav-link", "sidebar-link"], [1, "bi", "bi-person", "me-2"], ["routerLink", "/admin", "routerLinkActive", "active", 1, "nav-link", "sidebar-link"], [1, "bi", "bi-shield-lock", "me-2"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "aside", 0)(1, "nav", 1)(2, "a", 2);
            i0.ɵɵelement(3, "i", 3);
            i0.ɵɵtext(4, "Dashboard");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "a", 4);
            i0.ɵɵelement(6, "i", 5);
            i0.ɵɵtext(7, "Resumes");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "a", 6);
            i0.ɵɵelement(9, "i", 7);
            i0.ɵɵtext(10, "Job Match");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "a", 8);
            i0.ɵɵelement(12, "i", 9);
            i0.ɵɵtext(13, "Mock Interviews");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "a", 10);
            i0.ɵɵelement(15, "i", 11);
            i0.ɵɵtext(16, "Career Guidance");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "a", 12);
            i0.ɵɵelement(18, "i", 13);
            i0.ɵɵtext(19, "Profile");
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(20, SidebarComponent_Conditional_20_Template, 4, 0);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(20);
            i0.ɵɵconditional(ctx.auth.isAdmin() ? 20 : -1);
        } }, dependencies: [CommonModule, RouterLink, RouterLinkActive], styles: [".app-sidebar[_ngcontent-%COMP%] { width: 230px; min-height: calc(100vh - 56px); }\n    .sidebar-link[_ngcontent-%COMP%] { border-radius: 8px; padding: 0.55rem 0.8rem; color: var(--bs-body-color); }\n    .sidebar-link.active[_ngcontent-%COMP%] { background: var(--bs-primary); color: #fff; }\n    .sidebar-link[_ngcontent-%COMP%]:hover:not(.active) { background: var(--bs-secondary-bg); }"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SidebarComponent, [{
        type: Component,
        args: [{ selector: 'app-sidebar', standalone: true, imports: [CommonModule, RouterLink, RouterLinkActive], template: `
    <aside class="app-sidebar p-3 border-end">
      <nav class="nav flex-column gap-1">
        <a class="nav-link sidebar-link" routerLink="/dashboard" routerLinkActive="active"><i class="bi bi-speedometer2 me-2"></i>Dashboard</a>
        <a class="nav-link sidebar-link" routerLink="/resume" routerLinkActive="active"><i class="bi bi-file-earmark-text me-2"></i>Resumes</a>
        <a class="nav-link sidebar-link" routerLink="/job-match" routerLinkActive="active"><i class="bi bi-bullseye me-2"></i>Job Match</a>
        <a class="nav-link sidebar-link" routerLink="/interview" routerLinkActive="active"><i class="bi bi-mic me-2"></i>Mock Interviews</a>
        <a class="nav-link sidebar-link" routerLink="/career" routerLinkActive="active"><i class="bi bi-signpost-2 me-2"></i>Career Guidance</a>
        <a class="nav-link sidebar-link" routerLink="/profile" routerLinkActive="active"><i class="bi bi-person me-2"></i>Profile</a>
        @if (auth.isAdmin()) {
          <hr />
          <a class="nav-link sidebar-link" routerLink="/admin" routerLinkActive="active"><i class="bi bi-shield-lock me-2"></i>Admin Panel</a>
        }
      </nav>
    </aside>
  `, styles: ["\n    .app-sidebar { width: 230px; min-height: calc(100vh - 56px); }\n    .sidebar-link { border-radius: 8px; padding: 0.55rem 0.8rem; color: var(--bs-body-color); }\n    .sidebar-link.active { background: var(--bs-primary); color: #fff; }\n    .sidebar-link:hover:not(.active) { background: var(--bs-secondary-bg); }\n  "] }]
    }], () => [{ type: i1.AuthService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SidebarComponent, { className: "SidebarComponent", filePath: "src/app/shared/components/sidebar/sidebar.component.ts", lineNumber: 33 }); })();
