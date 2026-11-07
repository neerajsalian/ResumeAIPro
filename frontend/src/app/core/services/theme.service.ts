import { Injectable, signal, effect } from '@angular/core';

const THEME_KEY = 'resumeai_theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  theme = signal<'light' | 'dark'>((localStorage.getItem(THEME_KEY) as 'light' | 'dark') || 'light');

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
}
