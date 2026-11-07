import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "../../../core/services/admin.service";
import * as i2 from "../../../core/services/toast.service";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/common";
const _forTrack0 = ($index, $item) => $item._id;
function AdminUsersComponent_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵelement(1, "div", 7);
    i0.ɵɵelementEnd();
} }
function AdminUsersComponent_Conditional_9_For_18_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "td")(6, "span", 19);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "td")(9, "span", 19);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "td", 13);
    i0.ɵɵtext(12);
    i0.ɵɵpipe(13, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "td", 11)(15, "button", 20);
    i0.ɵɵlistener("click", function AdminUsersComponent_Conditional_9_For_18_Template_button_click_15_listener() { const u_r3 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.toggleStatus(u_r3)); });
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "button", 21);
    i0.ɵɵlistener("click", function AdminUsersComponent_Conditional_9_For_18_Template_button_click_17_listener() { const u_r3 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.toggleRole(u_r3)); });
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "button", 22);
    i0.ɵɵlistener("click", function AdminUsersComponent_Conditional_9_For_18_Template_button_click_19_listener() { const u_r3 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.deleteUser(u_r3)); });
    i0.ɵɵelement(20, "i", 23);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const u_r3 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(u_r3.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(u_r3.email);
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("text-bg-primary", u_r3.role === "admin")("text-bg-light", u_r3.role !== "admin");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(u_r3.role);
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("text-bg-success", u_r3.isActive)("text-bg-secondary", !u_r3.isActive);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(u_r3.isActive ? "Active" : "Inactive");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(13, 15, u_r3.createdAt, "mediumDate"));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(u_r3.isActive ? "Deactivate" : "Activate");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(u_r3.role === "admin" ? "Revoke Admin" : "Make Admin");
} }
function AdminUsersComponent_Conditional_9_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 8)(1, "table", 9)(2, "thead")(3, "tr", 10)(4, "th");
    i0.ɵɵtext(5, "Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "th");
    i0.ɵɵtext(7, "Email");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "th");
    i0.ɵɵtext(9, "Role");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "th");
    i0.ɵɵtext(11, "Status");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "th");
    i0.ɵɵtext(13, "Joined");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "th", 11);
    i0.ɵɵtext(15, "Actions");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(16, "tbody");
    i0.ɵɵrepeaterCreate(17, AdminUsersComponent_Conditional_9_For_18_Template, 21, 18, "tr", null, _forTrack0);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(19, "nav", 12)(20, "span", 13);
    i0.ɵɵtext(21);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "ul", 14)(23, "li", 15)(24, "button", 16);
    i0.ɵɵlistener("click", function AdminUsersComponent_Conditional_9_Template_button_click_24_listener() { i0.ɵɵrestoreView(_r1); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.goToPage(ctx_r3.page() - 1)); });
    i0.ɵɵtext(25, "Prev");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(26, "li", 17)(27, "span", 18);
    i0.ɵɵtext(28);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(29, "li", 15)(30, "button", 16);
    i0.ɵɵlistener("click", function AdminUsersComponent_Conditional_9_Template_button_click_30_listener() { i0.ɵɵrestoreView(_r1); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.goToPage(ctx_r3.page() + 1)); });
    i0.ɵɵtext(31, "Next");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(17);
    i0.ɵɵrepeater(ctx_r3.users());
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("", ctx_r3.total(), " users total");
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("disabled", ctx_r3.page() === 1);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate2("", ctx_r3.page(), " / ", ctx_r3.totalPages);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("disabled", ctx_r3.page() === ctx_r3.totalPages);
} }
export class AdminUsersComponent {
    adminService;
    toast;
    users = signal([], ...(ngDevMode ? [{ debugName: "users" }] : []));
    total = signal(0, ...(ngDevMode ? [{ debugName: "total" }] : []));
    page = signal(1, ...(ngDevMode ? [{ debugName: "page" }] : []));
    limit = 15;
    search = '';
    loading = signal(true, ...(ngDevMode ? [{ debugName: "loading" }] : []));
    constructor(adminService, toast) {
        this.adminService = adminService;
        this.toast = toast;
    }
    ngOnInit() {
        this.load();
    }
    load() {
        this.loading.set(true);
        this.adminService.listUsers(this.page(), this.limit, this.search).subscribe({
            next: (res) => {
                this.users.set(res.data.users);
                this.total.set(res.data.total);
            },
            complete: () => this.loading.set(false),
        });
    }
    get totalPages() {
        return Math.max(1, Math.ceil(this.total() / this.limit));
    }
    goToPage(p) {
        if (p < 1 || p > this.totalPages)
            return;
        this.page.set(p);
        this.load();
    }
    toggleStatus(u) {
        this.adminService.setUserStatus(u._id, !u.isActive).subscribe(() => {
            this.toast.show(`User ${!u.isActive ? 'activated' : 'deactivated'}`, 'success');
            this.load();
        });
    }
    toggleRole(u) {
        const newRole = u.role === 'admin' ? 'candidate' : 'admin';
        if (!confirm(`Change ${u.name}'s role to ${newRole}?`))
            return;
        this.adminService.setUserRole(u._id, newRole).subscribe(() => {
            this.toast.show('Role updated', 'success');
            this.load();
        });
    }
    deleteUser(u) {
        if (!confirm(`Permanently delete ${u.name}? This cannot be undone.`))
            return;
        this.adminService.deleteUser(u._id).subscribe(() => {
            this.toast.show('User deleted', 'success');
            this.load();
        });
    }
    static ɵfac = function AdminUsersComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AdminUsersComponent)(i0.ɵɵdirectiveInject(i1.AdminService), i0.ɵɵdirectiveInject(i2.ToastService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AdminUsersComponent, selectors: [["app-admin-users"]], decls: 10, vars: 2, consts: [[1, "d-flex", "justify-content-between", "align-items-center", "mb-3", "flex-wrap", "gap-2"], [1, "fw-bold", "mb-0"], [1, "input-group", 2, "max-width", "300px"], ["type", "text", "placeholder", "Search name or email\u2026", 1, "form-control", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "btn", "btn-outline-secondary", 3, "click"], [1, "bi", "bi-search"], [1, "text-center", "py-5"], [1, "spinner-border", "text-primary"], [1, "table-responsive"], [1, "table", "align-middle"], [1, "text-muted", "small"], [1, "text-end"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "small", "text-muted"], [1, "pagination", "pagination-sm", "mb-0"], [1, "page-item"], [1, "page-link", 3, "click"], [1, "page-item", "disabled"], [1, "page-link"], [1, "badge"], [1, "btn", "btn-sm", "btn-outline-secondary", "me-1", 3, "click"], [1, "btn", "btn-sm", "btn-outline-primary", "me-1", 3, "click"], [1, "btn", "btn-sm", "btn-outline-danger", 3, "click"], [1, "bi", "bi-trash"]], template: function AdminUsersComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div")(1, "div", 0)(2, "h3", 1);
            i0.ɵɵtext(3, "User Management");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "div", 2)(5, "input", 3);
            i0.ɵɵtwoWayListener("ngModelChange", function AdminUsersComponent_Template_input_ngModelChange_5_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.search, $event) || (ctx.search = $event); return $event; });
            i0.ɵɵlistener("keyup.enter", function AdminUsersComponent_Template_input_keyup_enter_5_listener() { ctx.page.set(1); return ctx.load(); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "button", 4);
            i0.ɵɵlistener("click", function AdminUsersComponent_Template_button_click_6_listener() { ctx.page.set(1); return ctx.load(); });
            i0.ɵɵelement(7, "i", 5);
            i0.ɵɵelementEnd()()();
            i0.ɵɵconditionalCreate(8, AdminUsersComponent_Conditional_8_Template, 2, 0, "div", 6)(9, AdminUsersComponent_Conditional_9_Template, 32, 7);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(5);
            i0.ɵɵtwoWayProperty("ngModel", ctx.search);
            i0.ɵɵadvance(3);
            i0.ɵɵconditional(ctx.loading() ? 8 : 9);
        } }, dependencies: [CommonModule, FormsModule, i3.DefaultValueAccessor, i3.NgControlStatus, i3.NgModel, i4.DatePipe], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AdminUsersComponent, [{
        type: Component,
        args: [{ selector: 'app-admin-users', standalone: true, imports: [CommonModule, FormsModule], template: "<div>\n  <div class=\"d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2\">\n    <h3 class=\"fw-bold mb-0\">User Management</h3>\n    <div class=\"input-group\" style=\"max-width: 300px;\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"Search name or email\u2026\" [(ngModel)]=\"search\" (keyup.enter)=\"page.set(1); load()\" />\n      <button class=\"btn btn-outline-secondary\" (click)=\"page.set(1); load()\"><i class=\"bi bi-search\"></i></button>\n    </div>\n  </div>\n\n  @if (loading()) {\n    <div class=\"text-center py-5\"><div class=\"spinner-border text-primary\"></div></div>\n  } @else {\n    <div class=\"table-responsive\">\n      <table class=\"table align-middle\">\n        <thead><tr class=\"text-muted small\"><th>Name</th><th>Email</th><th>Role</th><th>Status</th><th>Joined</th><th class=\"text-end\">Actions</th></tr></thead>\n        <tbody>\n          @for (u of users(); track u._id) {\n            <tr>\n              <td>{{ u.name }}</td>\n              <td>{{ u.email }}</td>\n              <td><span class=\"badge\" [class.text-bg-primary]=\"u.role === 'admin'\" [class.text-bg-light]=\"u.role !== 'admin'\">{{ u.role }}</span></td>\n              <td><span class=\"badge\" [class.text-bg-success]=\"u.isActive\" [class.text-bg-secondary]=\"!u.isActive\">{{ u.isActive ? 'Active' : 'Inactive' }}</span></td>\n              <td class=\"small text-muted\">{{ u.createdAt | date: 'mediumDate' }}</td>\n              <td class=\"text-end\">\n                <button class=\"btn btn-sm btn-outline-secondary me-1\" (click)=\"toggleStatus(u)\">{{ u.isActive ? 'Deactivate' : 'Activate' }}</button>\n                <button class=\"btn btn-sm btn-outline-primary me-1\" (click)=\"toggleRole(u)\">{{ u.role === 'admin' ? 'Revoke Admin' : 'Make Admin' }}</button>\n                <button class=\"btn btn-sm btn-outline-danger\" (click)=\"deleteUser(u)\"><i class=\"bi bi-trash\"></i></button>\n              </td>\n            </tr>\n          }\n        </tbody>\n      </table>\n    </div>\n\n    <nav class=\"d-flex justify-content-between align-items-center\">\n      <span class=\"small text-muted\">{{ total() }} users total</span>\n      <ul class=\"pagination pagination-sm mb-0\">\n        <li class=\"page-item\" [class.disabled]=\"page() === 1\"><button class=\"page-link\" (click)=\"goToPage(page() - 1)\">Prev</button></li>\n        <li class=\"page-item disabled\"><span class=\"page-link\">{{ page() }} / {{ totalPages }}</span></li>\n        <li class=\"page-item\" [class.disabled]=\"page() === totalPages\"><button class=\"page-link\" (click)=\"goToPage(page() + 1)\">Next</button></li>\n      </ul>\n    </nav>\n  }\n</div>\n" }]
    }], () => [{ type: i1.AdminService }, { type: i2.ToastService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AdminUsersComponent, { className: "AdminUsersComponent", filePath: "src/app/features/admin/users/admin-users.component.ts", lineNumber: 14 }); })();
