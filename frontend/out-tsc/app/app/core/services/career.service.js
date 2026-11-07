import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class CareerService {
    http;
    baseUrl = `${environment.apiUrl}/career`;
    constructor(http) {
        this.http = http;
    }
    getGuidance(resumeId, targetJobRole) {
        const params = targetJobRole ? `?targetJobRole=${encodeURIComponent(targetJobRole)}` : '';
        return this.http.get(`${this.baseUrl}/guidance/${resumeId}${params}`);
    }
    static ɵfac = function CareerService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CareerService)(i0.ɵɵinject(i1.HttpClient)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: CareerService, factory: CareerService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CareerService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], () => [{ type: i1.HttpClient }], null); })();
