import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class ReportService {
    http;
    baseUrl = `${environment.apiUrl}/reports`;
    constructor(http) {
        this.http = http;
    }
    generateResumeReport(analysisId) {
        return this.http.post(`${this.baseUrl}/resume-analysis/${analysisId}`, {});
    }
    generateInterviewReport(interviewId) {
        return this.http.post(`${this.baseUrl}/interview/${interviewId}`, {});
    }
    list() {
        return this.http.get(this.baseUrl);
    }
    downloadUrl(id) {
        return `${this.baseUrl}/${id}/download`;
    }
    email(id, email) {
        return this.http.post(`${this.baseUrl}/${id}/email`, { email });
    }
    static ɵfac = function ReportService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ReportService)(i0.ɵɵinject(i1.HttpClient)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ReportService, factory: ReportService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ReportService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], () => [{ type: i1.HttpClient }], null); })();
