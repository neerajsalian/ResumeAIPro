import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { ToastService } from '../../../core/services/toast.service';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <div class="auth-wrapper d-flex align-items-center justify-content-center">
      <div class="card auth-card shadow-sm border-0">
        <div class="card-body p-4 p-md-5">
          <div class="text-center mb-4">
            <i class="bi bi-key-fill text-primary display-5"></i>
            <h3 class="fw-bold mt-2 mb-0">Forgot password</h3>
            <p class="text-muted small">We'll send you a reset link</p>
          </div>

          @if (!sent()) {
            <form (ngSubmit)="submit()">
              <div class="mb-3">
                <label class="form-label small">Email address</label>
                <input type="email" class="form-control" name="email" [(ngModel)]="email" required placeholder="you@example.com" />
              </div>
              <button type="submit" class="btn btn-primary w-100" [disabled]="loading()">
                @if (loading()) { <span class="spinner-border spinner-border-sm me-2"></span> }
                Send Reset Link
              </button>
            </form>
          } @else {
            <div class="alert alert-success small">
              If that email exists, a reset link has been sent.
              @if (devUrl()) {
                <div class="mt-2">
                  <strong>Dev mode link:</strong>
                  <a [routerLink]="devUrl()">{{ devUrl() }}</a>
                </div>
              }
            </div>
          }

          <p class="text-center small text-muted mt-4 mb-0">
            <a routerLink="/auth/login">Back to login</a>
          </p>
        </div>
      </div>
    </div>
  `,
})
export class ForgotPasswordComponent {
  email = '';
  loading = signal(false);
  sent = signal(false);
  devUrl = signal<string | null>(null);

  constructor(private auth: AuthService, private toast: ToastService) {}

  submit() {
    if (!this.email) return;
    this.loading.set(true);
    this.auth.forgotPassword(this.email).subscribe({
      next: (res: any) => {
        this.sent.set(true);
        if (res?.devResetUrl) {
          const token = res.devResetUrl.split('/reset-password/')[1];
          this.devUrl.set(`/auth/reset-password/${token}`);
        }
      },
      error: () => this.toast.show('Something went wrong. Please try again.', 'error'),
      complete: () => this.loading.set(false),
    });
  }
}
