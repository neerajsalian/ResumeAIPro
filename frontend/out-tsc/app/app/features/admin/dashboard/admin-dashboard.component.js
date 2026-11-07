import { Component, ViewChild, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Chart, registerables } from 'chart.js';
import * as i0 from "@angular/core";
import * as i1 from "../../../core/services/admin.service";
import * as i2 from "@angular/common";
const _c0 = ["typeChart"];
const _c1 = ["usersChart"];
function AdminDashboardComponent_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵelement(1, "div", 7);
    i0.ɵɵelementEnd();
} }
function AdminDashboardComponent_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8)(1, "div", 9)(2, "div", 10)(3, "div", 11)(4, "div", 12);
    i0.ɵɵtext(5, "Total Users");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 13);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(8, "div", 9)(9, "div", 10)(10, "div", 11)(11, "div", 12);
    i0.ɵɵtext(12, "Candidates");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "div", 13);
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(15, "div", 9)(16, "div", 10)(17, "div", 11)(18, "div", 12);
    i0.ɵɵtext(19, "Resumes");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "div", 13);
    i0.ɵɵtext(21);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(22, "div", 9)(23, "div", 10)(24, "div", 11)(25, "div", 12);
    i0.ɵɵtext(26, "Interviews");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "div", 13);
    i0.ɵɵtext(28);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(29, "div", 9)(30, "div", 10)(31, "div", 11)(32, "div", 12);
    i0.ɵɵtext(33, "Avg ATS");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(34, "div", 13);
    i0.ɵɵtext(35);
    i0.ɵɵpipe(36, "number");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(37, "div", 9)(38, "div", 10)(39, "div", 11)(40, "div", 12);
    i0.ɵɵtext(41, "Avg Interview");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(42, "div", 13);
    i0.ɵɵtext(43);
    i0.ɵɵpipe(44, "number");
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(45, "div", 14)(46, "div", 15)(47, "div", 10)(48, "div", 11)(49, "h6", 16);
    i0.ɵɵtext(50, "Interviews by Type");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(51, "canvas", null, 0);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(53, "div", 17)(54, "div", 10)(55, "div", 11)(56, "h6", 16);
    i0.ɵɵtext(57, "User Signups Over Time");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(58, "canvas", null, 1);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const s_r1 = ctx;
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(s_r1.totalUsers);
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(s_r1.totalCandidates);
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(s_r1.totalResumes);
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(s_r1.totalInterviews);
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(36, 6, s_r1.averageAtsScore, "1.0-0"));
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(44, 9, s_r1.averageInterviewScore, "1.0-0"));
} }
Chart.register(...registerables);
export class AdminDashboardComponent {
    adminService;
    typeChartRef;
    usersChartRef;
    stats = signal(null, ...(ngDevMode ? [{ debugName: "stats" }] : []));
    loading = signal(true, ...(ngDevMode ? [{ debugName: "loading" }] : []));
    constructor(adminService) {
        this.adminService = adminService;
    }
    ngOnInit() {
        this.adminService.getStats().subscribe({
            next: (res) => {
                this.stats.set(res.data);
                setTimeout(() => this.renderCharts(), 0);
            },
            complete: () => this.loading.set(false),
        });
    }
    renderCharts() {
        const s = this.stats();
        if (!s)
            return;
        if (this.typeChartRef) {
            new Chart(this.typeChartRef.nativeElement, {
                type: 'doughnut',
                data: {
                    labels: s.interviewsByType.map((t) => t._id),
                    datasets: [{ data: s.interviewsByType.map((t) => t.count), backgroundColor: ['#6366f1', '#22c55e', '#f59e0b', '#ef4444'] }],
                },
                options: { responsive: true, plugins: { legend: { position: 'bottom' } } },
            });
        }
        if (this.usersChartRef) {
            new Chart(this.usersChartRef.nativeElement, {
                type: 'line',
                data: {
                    labels: s.usersOverTime.map((u) => u._id),
                    datasets: [{ label: 'New Users', data: s.usersOverTime.map((u) => u.count), borderColor: '#6366f1', tension: 0.3 }],
                },
                options: { responsive: true, plugins: { legend: { display: false } } },
            });
        }
    }
    static ɵfac = function AdminDashboardComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AdminDashboardComponent)(i0.ɵɵdirectiveInject(i1.AdminService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AdminDashboardComponent, selectors: [["app-admin-dashboard"]], viewQuery: function AdminDashboardComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
            i0.ɵɵviewQuery(_c1, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.typeChartRef = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.usersChartRef = _t.first);
        } }, decls: 9, vars: 1, consts: [["typeChart", ""], ["usersChart", ""], [1, "d-flex", "justify-content-between", "align-items-center", "mb-4"], [1, "fw-bold", "mb-0"], ["routerLink", "/admin/users", 1, "btn", "btn-outline-primary"], [1, "bi", "bi-people", "me-1"], [1, "text-center", "py-5"], [1, "spinner-border", "text-primary"], [1, "row", "g-3", "mb-4"], [1, "col-6", "col-md-2"], [1, "card", "border-0", "shadow-sm", "h-100"], [1, "card-body"], [1, "text-muted", "small"], [1, "fs-4", "fw-bold"], [1, "row", "g-3"], [1, "col-md-5"], [1, "text-muted", "mb-3"], [1, "col-md-7"]], template: function AdminDashboardComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div")(1, "div", 2)(2, "h3", 3);
            i0.ɵɵtext(3, "Admin Dashboard");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "a", 4);
            i0.ɵɵelement(5, "i", 5);
            i0.ɵɵtext(6, " Manage Users");
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(7, AdminDashboardComponent_Conditional_7_Template, 2, 0, "div", 6)(8, AdminDashboardComponent_Conditional_8_Template, 60, 12);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            let tmp_0_0;
            i0.ɵɵadvance(7);
            i0.ɵɵconditional(ctx.loading() ? 7 : (tmp_0_0 = ctx.stats()) ? 8 : -1, tmp_0_0);
        } }, dependencies: [CommonModule, RouterLink, i2.DecimalPipe], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AdminDashboardComponent, [{
        type: Component,
        args: [{ selector: 'app-admin-dashboard', standalone: true, imports: [CommonModule, RouterLink], template: "<div>\n  <div class=\"d-flex justify-content-between align-items-center mb-4\">\n    <h3 class=\"fw-bold mb-0\">Admin Dashboard</h3>\n    <a routerLink=\"/admin/users\" class=\"btn btn-outline-primary\"><i class=\"bi bi-people me-1\"></i> Manage Users</a>\n  </div>\n\n  @if (loading()) {\n    <div class=\"text-center py-5\"><div class=\"spinner-border text-primary\"></div></div>\n  } @else if (stats(); as s) {\n    <div class=\"row g-3 mb-4\">\n      <div class=\"col-6 col-md-2\"><div class=\"card border-0 shadow-sm h-100\"><div class=\"card-body\"><div class=\"text-muted small\">Total Users</div><div class=\"fs-4 fw-bold\">{{ s.totalUsers }}</div></div></div></div>\n      <div class=\"col-6 col-md-2\"><div class=\"card border-0 shadow-sm h-100\"><div class=\"card-body\"><div class=\"text-muted small\">Candidates</div><div class=\"fs-4 fw-bold\">{{ s.totalCandidates }}</div></div></div></div>\n      <div class=\"col-6 col-md-2\"><div class=\"card border-0 shadow-sm h-100\"><div class=\"card-body\"><div class=\"text-muted small\">Resumes</div><div class=\"fs-4 fw-bold\">{{ s.totalResumes }}</div></div></div></div>\n      <div class=\"col-6 col-md-2\"><div class=\"card border-0 shadow-sm h-100\"><div class=\"card-body\"><div class=\"text-muted small\">Interviews</div><div class=\"fs-4 fw-bold\">{{ s.totalInterviews }}</div></div></div></div>\n      <div class=\"col-6 col-md-2\"><div class=\"card border-0 shadow-sm h-100\"><div class=\"card-body\"><div class=\"text-muted small\">Avg ATS</div><div class=\"fs-4 fw-bold\">{{ s.averageAtsScore | number: '1.0-0' }}</div></div></div></div>\n      <div class=\"col-6 col-md-2\"><div class=\"card border-0 shadow-sm h-100\"><div class=\"card-body\"><div class=\"text-muted small\">Avg Interview</div><div class=\"fs-4 fw-bold\">{{ s.averageInterviewScore | number: '1.0-0' }}</div></div></div></div>\n    </div>\n\n    <div class=\"row g-3\">\n      <div class=\"col-md-5\">\n        <div class=\"card border-0 shadow-sm h-100\"><div class=\"card-body\">\n          <h6 class=\"text-muted mb-3\">Interviews by Type</h6>\n          <canvas #typeChart></canvas>\n        </div></div>\n      </div>\n      <div class=\"col-md-7\">\n        <div class=\"card border-0 shadow-sm h-100\"><div class=\"card-body\">\n          <h6 class=\"text-muted mb-3\">User Signups Over Time</h6>\n          <canvas #usersChart></canvas>\n        </div></div>\n      </div>\n    </div>\n  }\n</div>\n" }]
    }], () => [{ type: i1.AdminService }], { typeChartRef: [{
            type: ViewChild,
            args: ['typeChart']
        }], usersChartRef: [{
            type: ViewChild,
            args: ['usersChart']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AdminDashboardComponent, { className: "AdminDashboardComponent", filePath: "src/app/features/admin/dashboard/admin-dashboard.component.ts", lineNumber: 16 }); })();
