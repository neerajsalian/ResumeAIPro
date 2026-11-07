import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class ResumeService {
    http;
    baseUrl = `${environment.apiUrl}/resume`;
    analysisUrl = `${environment.apiUrl}/analysis`;
    atsUrl = `${environment.apiUrl}/ats`;
    constructor(http) {
        this.http = http;
    }
    upload(file) {
        const form = new FormData();
        form.append('resume', file);
        return this.http.post(`${this.baseUrl}/upload`, form);
    }
    list() {
        return this.http.get(this.baseUrl);
    }
    get(id) {
        return this.http.get(`${this.baseUrl}/${id}`);
    }
    versionHistory(id) {
        return this.http.get(`${this.baseUrl}/${id}/versions`);
    }
    delete(id) {
        return this.http.delete(`${this.baseUrl}/${id}`);
    }
    downloadUrl(id) {
        return `${this.baseUrl}/${id}/download`;
    }
    analyze(resumeId, targetJobRole) {
        return this.http.post(`${this.analysisUrl}/${resumeId}`, { targetJobRole });
    }
    getLatestAnalysis(resumeId) {
        return this.http.get(`${this.analysisUrl}/${resumeId}`);
    }
    getAnalysisHistory() {
        return this.http.get(`${this.analysisUrl}/history/all`);
    }
    runAtsChecks(resumeId) {
        return this.http.get(`${this.atsUrl}/${resumeId}/checks`);
    }
    static ɵfac = function ResumeService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ResumeService)(i0.ɵɵinject(i1.HttpClient)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ResumeService, factory: ResumeService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ResumeService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], () => [{ type: i1.HttpClient }], null); })();
