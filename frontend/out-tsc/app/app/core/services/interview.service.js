import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class InterviewService {
    http;
    textUrl = `${environment.apiUrl}/interview`;
    voiceUrl = `${environment.apiUrl}/voice-interview`;
    constructor(http) {
        this.http = http;
    }
    urlFor(mode) {
        return mode === 'voice' ? this.voiceUrl : this.textUrl;
    }
    create(payload) {
        return this.http.post(this.urlFor(payload.mode), payload);
    }
    list() {
        return this.http.get(this.textUrl);
    }
    get(id, mode = 'text') {
        return this.http.get(`${this.urlFor(mode)}/${id}`);
    }
    submitAnswer(id, mode, payload) {
        return this.http.post(`${this.urlFor(mode)}/${id}/answer`, payload);
    }
    complete(id, mode) {
        return this.http.post(`${this.urlFor(mode)}/${id}/complete`, {});
    }
    abandon(id, mode) {
        return this.http.post(`${this.urlFor(mode)}/${id}/abandon`, {});
    }
    static ɵfac = function InterviewService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || InterviewService)(i0.ɵɵinject(i1.HttpClient)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: InterviewService, factory: InterviewService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InterviewService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], () => [{ type: i1.HttpClient }], null); })();
