import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminService } from '../../../core/services/admin.service';
import { ToastService } from '../../../core/services/toast.service';
import { User } from '../../../core/models/models';

@Component({
  selector: 'app-admin-users',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-users.component.html',
})
export class AdminUsersComponent implements OnInit {
  users = signal<User[]>([]);
  total = signal(0);
  page = signal(1);
  limit = 15;
  search = '';
  loading = signal(true);

  constructor(private adminService: AdminService, private toast: ToastService) {}

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.loading.set(true);
    this.adminService.listUsers(this.page(), this.limit, this.search).subscribe({
      next: (res) => {
        this.users.set(res.data.users);
        this.total.set(res.data.total);
      },
      complete: () => this.loading.set(false),
    });
  }

  get totalPages() {
    return Math.max(1, Math.ceil(this.total() / this.limit));
  }

  goToPage(p: number) {
    if (p < 1 || p > this.totalPages) return;
    this.page.set(p);
    this.load();
  }

  toggleStatus(u: User) {
    this.adminService.setUserStatus(u._id, !u.isActive).subscribe(() => {
      this.toast.show(`User ${!u.isActive ? 'activated' : 'deactivated'}`, 'success');
      this.load();
    });
  }

  toggleRole(u: User) {
    const newRole = u.role === 'admin' ? 'candidate' : 'admin';
    if (!confirm(`Change ${u.name}'s role to ${newRole}?`)) return;
    this.adminService.setUserRole(u._id, newRole).subscribe(() => {
      this.toast.show('Role updated', 'success');
      this.load();
    });
  }

  deleteUser(u: User) {
    if (!confirm(`Permanently delete ${u.name}? This cannot be undone.`)) return;
    this.adminService.deleteUser(u._id).subscribe(() => {
      this.toast.show('User deleted', 'success');
      this.load();
    });
  }
}
