import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class AdminService {
    http;
    baseUrl = `${environment.apiUrl}/admin`;
    constructor(http) {
        this.http = http;
    }
    getStats() {
        return this.http.get(`${this.baseUrl}/stats`);
    }
    listUsers(page = 1, limit = 20, search = '') {
        return this.http.get(`${this.baseUrl}/users?page=${page}&limit=${limit}&search=${encodeURIComponent(search)}`);
    }
    getUserDetail(id) {
        return this.http.get(`${this.baseUrl}/users/${id}`);
    }
    setUserStatus(id, isActive) {
        return this.http.put(`${this.baseUrl}/users/${id}/status`, { isActive });
    }
    setUserRole(id, role) {
        return this.http.put(`${this.baseUrl}/users/${id}/role`, { role });
    }
    deleteUser(id) {
        return this.http.delete(`${this.baseUrl}/users/${id}`);
    }
    listAllReports() {
        return this.http.get(`${this.baseUrl}/reports`);
    }
    static ɵfac = function AdminService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AdminService)(i0.ɵɵinject(i1.HttpClient)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AdminService, factory: AdminService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AdminService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], () => [{ type: i1.HttpClient }], null); })();
