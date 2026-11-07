import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { ToastService } from '../../core/services/toast.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './profile.component.html',
})
export class ProfileComponent {
  saving = signal(false);
  changingPassword = signal(false);

  name = '';
  phone = '';
  targetJobRole = '';
  location = '';
  bio = '';

  currentPassword = '';
  newPassword = '';

  constructor(public auth: AuthService, private toast: ToastService) {
    const user = this.auth.currentUser();
    this.name = user?.name || '';
    this.phone = user?.phone || '';
    this.targetJobRole = user?.targetJobRole || '';
    this.location = user?.location || '';
    this.bio = user?.bio || '';
  }

  saveProfile() {
    this.saving.set(true);
    this.auth
      .updateProfile({ name: this.name, phone: this.phone, targetJobRole: this.targetJobRole, location: this.location, bio: this.bio })
      .subscribe({
        next: () => this.toast.show('Profile updated', 'success'),
        error: () => this.saving.set(false),
        complete: () => this.saving.set(false),
      });
  }

  changePassword() {
    if (this.newPassword.length < 6) {
      this.toast.show('New password must be at least 6 characters', 'error');
      return;
    }
    this.changingPassword.set(true);
    this.auth.changePassword(this.currentPassword, this.newPassword).subscribe({
      next: () => {
        this.toast.show('Password changed successfully', 'success');
        this.currentPassword = '';
        this.newPassword = '';
      },
      error: () => this.changingPassword.set(false),
      complete: () => this.changingPassword.set(false),
    });
  }
}
