import { Routes } from '@angular/router';
import { authGuard, adminGuard, guestGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: 'auth',
    canActivate: [guestGuard],
    children: [
      { path: 'login', loadComponent: () => import('./features/auth/login/login.component').then((m) => m.LoginComponent) },
      { path: 'register', loadComponent: () => import('./features/auth/register/register.component').then((m) => m.RegisterComponent) },
      { path: 'forgot-password', loadComponent: () => import('./features/auth/forgot-password/forgot-password.component').then((m) => m.ForgotPasswordComponent) },
      { path: 'reset-password/:token', loadComponent: () => import('./features/auth/reset-password/reset-password.component').then((m) => m.ResetPasswordComponent) },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
    ],
  },
  {
    path: '',
    canActivate: [authGuard],
    loadComponent: () => import('./shared/layout/shell.component').then((m) => m.ShellComponent),
    children: [
      { path: 'dashboard', loadComponent: () => import('./features/dashboard/dashboard.component').then((m) => m.DashboardComponent) },
      { path: 'resume', loadComponent: () => import('./features/resume/list/resume-list.component').then((m) => m.ResumeListComponent) },
      { path: 'resume/:id', loadComponent: () => import('./features/resume/detail/resume-detail.component').then((m) => m.ResumeDetailComponent) },
      { path: 'job-match', loadComponent: () => import('./features/job-match/job-match.component').then((m) => m.JobMatchComponent) },
      { path: 'interview', loadComponent: () => import('./features/interview/list/interview-list.component').then((m) => m.InterviewListComponent) },
      { path: 'interview/new', loadComponent: () => import('./features/interview/setup/interview-setup.component').then((m) => m.InterviewSetupComponent) },
      { path: 'interview/:id', loadComponent: () => import('./features/interview/session/interview-session.component').then((m) => m.InterviewSessionComponent) },
      { path: 'career', loadComponent: () => import('./features/career/career.component').then((m) => m.CareerComponent) },
      { path: 'profile', loadComponent: () => import('./features/profile/profile.component').then((m) => m.ProfileComponent) },
      {
        path: 'admin',
        canActivate: [adminGuard],
        children: [
          { path: '', loadComponent: () => import('./features/admin/dashboard/admin-dashboard.component').then((m) => m.AdminDashboardComponent) },
          { path: 'users', loadComponent: () => import('./features/admin/users/admin-users.component').then((m) => m.AdminUsersComponent) },
        ],
      },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  },
  { path: '**', redirectTo: 'dashboard' },
];
