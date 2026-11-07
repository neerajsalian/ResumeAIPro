import { Injectable, signal, effect } from '@angular/core';
import * as i0 from "@angular/core";
const THEME_KEY = 'resumeai_theme';
export class ThemeService {
    theme = signal(localStorage.getItem(THEME_KEY) || 'light', ...(ngDevMode ? [{ debugName: "theme" }] : []));
    constructor() {
        effect(() => {
            const t = this.theme();
            document.documentElement.setAttribute('data-bs-theme', t);
            document.body.setAttribute('data-theme', t);
            localStorage.setItem(THEME_KEY, t);
        });
    }
    toggle() {
        this.theme.set(this.theme() === 'light' ? 'dark' : 'light');
    }
    static ɵfac = function ThemeService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ThemeService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ThemeService, factory: ThemeService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ThemeService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], () => [], null); })();
