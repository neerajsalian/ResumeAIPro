import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { ToastService } from '../../../core/services/toast.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  name = '';
  email = '';
  password = '';
  targetJobRole = '';
  loading = signal(false);

  constructor(private auth: AuthService, private router: Router, private toast: ToastService) {}

  submit() {
    if (!this.name || !this.email || !this.password) {
      this.toast.show('Please fill in all required fields', 'error');
      return;
    }
    if (this.password.length < 6) {
      this.toast.show('Password must be at least 6 characters', 'error');
      return;
    }
    this.loading.set(true);
    this.auth
      .register({ name: this.name, email: this.email, password: this.password, targetJobRole: this.targetJobRole })
      .subscribe({
        next: () => {
          this.toast.show('Account created! Welcome to ResumeAI Pro.', 'success');
          this.router.navigate(['/dashboard']);
        },
        error: () => this.loading.set(false),
        complete: () => this.loading.set(false),
      });
  }
}
