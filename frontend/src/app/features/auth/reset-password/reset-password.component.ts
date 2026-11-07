import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { ToastService } from '../../../core/services/toast.service';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <div class="auth-wrapper d-flex align-items-center justify-content-center">
      <div class="card auth-card shadow-sm border-0">
        <div class="card-body p-4 p-md-5">
          <div class="text-center mb-4">
            <i class="bi bi-shield-lock-fill text-primary display-5"></i>
            <h3 class="fw-bold mt-2 mb-0">Set a new password</h3>
          </div>
          <form (ngSubmit)="submit()">
            <div class="mb-3">
              <label class="form-label small">New password</label>
              <input type="password" class="form-control" name="password" [(ngModel)]="password" required placeholder="At least 6 characters" />
            </div>
            <button type="submit" class="btn btn-primary w-100" [disabled]="loading()">
              @if (loading()) { <span class="spinner-border spinner-border-sm me-2"></span> }
              Reset Password
            </button>
          </form>
          <p class="text-center small text-muted mt-4 mb-0">
            <a routerLink="/auth/login">Back to login</a>
          </p>
        </div>
      </div>
    </div>
  `,
})
export class ResetPasswordComponent {
  password = '';
  loading = signal(false);
  token = '';

  constructor(private route: ActivatedRoute, private auth: AuthService, private router: Router, private toast: ToastService) {
    this.token = this.route.snapshot.paramMap.get('token') || '';
  }

  submit() {
    if (this.password.length < 6) {
      this.toast.show('Password must be at least 6 characters', 'error');
      return;
    }
    this.loading.set(true);
    this.auth.resetPassword(this.token, this.password).subscribe({
      next: () => {
        this.toast.show('Password reset successfully. Please log in.', 'success');
        this.router.navigate(['/auth/login']);
      },
      error: () => this.loading.set(false),
      complete: () => this.loading.set(false),
    });
  }
}
