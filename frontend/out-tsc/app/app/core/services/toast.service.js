import { Injectable, signal } from '@angular/core';
import * as i0 from "@angular/core";
export class ToastService {
    toasts = signal([], ...(ngDevMode ? [{ debugName: "toasts" }] : []));
    nextId = 1;
    show(message, type = 'info', durationMs = 4000) {
        const id = this.nextId++;
        this.toasts.update((list) => [...list, { id, message, type }]);
        setTimeout(() => this.dismiss(id), durationMs);
    }
    dismiss(id) {
        this.toasts.update((list) => list.filter((t) => t.id !== id));
    }
    static ɵfac = function ToastService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ToastService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ToastService, factory: ToastService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ToastService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
