import { Injectable, signal, computed } from '@angular/core';
import { tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@angular/router";
const TOKEN_KEY = 'resumeai_access_token';
const REFRESH_KEY = 'resumeai_refresh_token';
const USER_KEY = 'resumeai_user';
export class AuthService {
    http;
    router;
    baseUrl = `${environment.apiUrl}/auth`;
    /** Reactive current-user signal so templates/guards update instantly on login/logout. */
    currentUser = signal(this.readStoredUser(), ...(ngDevMode ? [{ debugName: "currentUser" }] : []));
    isLoggedIn = computed(() => !!this.currentUser(), ...(ngDevMode ? [{ debugName: "isLoggedIn" }] : []));
    isAdmin = computed(() => this.currentUser()?.role === 'admin', ...(ngDevMode ? [{ debugName: "isAdmin" }] : []));
    constructor(http, router) {
        this.http = http;
        this.router = router;
    }
    readStoredUser() {
        try {
            const raw = localStorage.getItem(USER_KEY);
            return raw ? JSON.parse(raw) : null;
        }
        catch {
            return null;
        }
    }
    register(payload) {
        return this.http
            .post(`${this.baseUrl}/register`, payload)
            .pipe(tap((res) => this.persistSession(res.data)));
    }
    login(email, password) {
        return this.http
            .post(`${this.baseUrl}/login`, { email, password })
            .pipe(tap((res) => this.persistSession(res.data)));
    }
    forgotPassword(email) {
        return this.http.post(`${this.baseUrl}/forgot-password`, { email });
    }
    resetPassword(token, password) {
        return this.http.post(`${this.baseUrl}/reset-password/${token}`, { password });
    }
    updateProfile(payload) {
        return this.http.put(`${this.baseUrl}/profile`, payload).pipe(tap((res) => {
            this.currentUser.set(res.data.user);
            localStorage.setItem(USER_KEY, JSON.stringify(res.data.user));
        }));
    }
    changePassword(currentPassword, newPassword) {
        return this.http.put(`${this.baseUrl}/change-password`, { currentPassword, newPassword });
    }
    fetchMe() {
        return this.http.get(`${this.baseUrl}/me`).pipe(tap((res) => {
            this.currentUser.set(res.data.user);
            localStorage.setItem(USER_KEY, JSON.stringify(res.data.user));
        }));
    }
    persistSession(data) {
        localStorage.setItem(TOKEN_KEY, data.accessToken);
        localStorage.setItem(REFRESH_KEY, data.refreshToken);
        localStorage.setItem(USER_KEY, JSON.stringify(data.user));
        this.currentUser.set(data.user);
    }
    getToken() {
        return localStorage.getItem(TOKEN_KEY);
    }
    logout() {
        localStorage.removeItem(TOKEN_KEY);
        localStorage.removeItem(REFRESH_KEY);
        localStorage.removeItem(USER_KEY);
        this.currentUser.set(null);
        this.router.navigate(['/auth/login']);
    }
    static ɵfac = function AuthService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AuthService)(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.Router)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AuthService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], () => [{ type: i1.HttpClient }, { type: i2.Router }], null); })();
