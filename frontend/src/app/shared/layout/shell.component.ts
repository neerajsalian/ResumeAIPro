import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../components/sidebar/sidebar.component';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent],
  template: `
    <div class="d-flex">
      <app-sidebar class="d-none d-md-block" />
      <main class="flex-grow-1 p-3 p-md-4 app-main">
        <router-outlet />
      </main>
    </div>
  `,
  styles: [`.app-main { min-height: calc(100vh - 56px); }`],
})
export class ShellComponent {}
