import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <aside class="app-sidebar p-3 border-end">
      <nav class="nav flex-column gap-1">
        <a class="nav-link sidebar-link" routerLink="/dashboard" routerLinkActive="active"><i class="bi bi-speedometer2 me-2"></i>Dashboard</a>
        <a class="nav-link sidebar-link" routerLink="/resume" routerLinkActive="active"><i class="bi bi-file-earmark-text me-2"></i>Resumes</a>
        <a class="nav-link sidebar-link" routerLink="/job-match" routerLinkActive="active"><i class="bi bi-bullseye me-2"></i>Job Match</a>
        <a class="nav-link sidebar-link" routerLink="/interview" routerLinkActive="active"><i class="bi bi-mic me-2"></i>Mock Interviews</a>
        <a class="nav-link sidebar-link" routerLink="/career" routerLinkActive="active"><i class="bi bi-signpost-2 me-2"></i>Career Guidance</a>
        <a class="nav-link sidebar-link" routerLink="/profile" routerLinkActive="active"><i class="bi bi-person me-2"></i>Profile</a>
        @if (auth.isAdmin()) {
          <hr />
          <a class="nav-link sidebar-link" routerLink="/admin" routerLinkActive="active"><i class="bi bi-shield-lock me-2"></i>Admin Panel</a>
        }
      </nav>
    </aside>
  `,
  styles: [`
    .app-sidebar { width: 230px; min-height: calc(100vh - 56px); }
    .sidebar-link { border-radius: 8px; padding: 0.55rem 0.8rem; color: var(--bs-body-color); }
    .sidebar-link.active { background: var(--bs-primary); color: #fff; }
    .sidebar-link:hover:not(.active) { background: var(--bs-secondary-bg); }
  `],
})
export class SidebarComponent {
  constructor(public auth: AuthService) {}
}
