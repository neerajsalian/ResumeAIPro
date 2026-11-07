import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import * as i0 from "@angular/core";
export class ShellComponent {
    static ɵfac = function ShellComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ShellComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ShellComponent, selectors: [["app-shell"]], decls: 4, vars: 0, consts: [[1, "d-flex"], [1, "d-none", "d-md-block"], [1, "flex-grow-1", "p-3", "p-md-4", "app-main"]], template: function ShellComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelement(1, "app-sidebar", 1);
            i0.ɵɵelementStart(2, "main", 2);
            i0.ɵɵelement(3, "router-outlet");
            i0.ɵɵelementEnd()();
        } }, dependencies: [RouterOutlet, SidebarComponent], styles: [".app-main[_ngcontent-%COMP%] { min-height: calc(100vh - 56px); }"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ShellComponent, [{
        type: Component,
        args: [{ selector: 'app-shell', standalone: true, imports: [RouterOutlet, SidebarComponent], template: `
    <div class="d-flex">
      <app-sidebar class="d-none d-md-block" />
      <main class="flex-grow-1 p-3 p-md-4 app-main">
        <router-outlet />
      </main>
    </div>
  `, styles: [".app-main { min-height: calc(100vh - 56px); }"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ShellComponent, { className: "ShellComponent", filePath: "src/app/shared/layout/shell.component.ts", lineNumber: 19 }); })();
