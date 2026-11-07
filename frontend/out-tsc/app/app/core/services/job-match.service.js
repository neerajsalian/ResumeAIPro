import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class JobMatchService {
    http;
    baseUrl = `${environment.apiUrl}/job-match`;
    constructor(http) {
        this.http = http;
    }
    match(resumeId, payload) {
        return this.http.post(`${this.baseUrl}/${resumeId}`, payload);
    }
    list() {
        return this.http.get(this.baseUrl);
    }
    get(id) {
        return this.http.get(`${this.baseUrl}/${id}`);
    }
    static ɵfac = function JobMatchService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || JobMatchService)(i0.ɵɵinject(i1.HttpClient)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: JobMatchService, factory: JobMatchService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(JobMatchService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], () => [{ type: i1.HttpClient }], null); })();
