import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { ThemeService } from '../../../core/services/theme.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  menuOpen = signal(false);

  constructor(public auth: AuthService, public theme: ThemeService) {}

  toggleMenu() {
    this.menuOpen.update((open) => !open);
  }

  logout() {
    this.menuOpen.set(false);
    this.auth.logout();
  }
}
