import { Injectable, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ApiResponse, AuthResponse, User } from '../models/models';

const TOKEN_KEY = 'resumeai_access_token';
const REFRESH_KEY = 'resumeai_refresh_token';
const USER_KEY = 'resumeai_user';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private baseUrl = `${environment.apiUrl}/auth`;

  /** Reactive current-user signal so templates/guards update instantly on login/logout. */
  currentUser = signal<User | null>(this.readStoredUser());
  isLoggedIn = computed(() => !!this.currentUser());
  isAdmin = computed(() => this.currentUser()?.role === 'admin');

  constructor(private http: HttpClient, private router: Router) {}

  private readStoredUser(): User | null {
    try {
      const raw = localStorage.getItem(USER_KEY);
      return raw ? (JSON.parse(raw) as User) : null;
    } catch {
      return null;
    }
  }

  register(payload: { name: string; email: string; password: string; phone?: string; targetJobRole?: string }): Observable<ApiResponse<AuthResponse>> {
    return this.http
      .post<ApiResponse<AuthResponse>>(`${this.baseUrl}/register`, payload)
      .pipe(tap((res) => this.persistSession(res.data)));
  }

  login(email: string, password: string): Observable<ApiResponse<AuthResponse>> {
    return this.http
      .post<ApiResponse<AuthResponse>>(`${this.baseUrl}/login`, { email, password })
      .pipe(tap((res) => this.persistSession(res.data)));
  }

  forgotPassword(email: string) {
    return this.http.post<ApiResponse<any>>(`${this.baseUrl}/forgot-password`, { email });
  }

  resetPassword(token: string, password: string) {
    return this.http.post<ApiResponse<any>>(`${this.baseUrl}/reset-password/${token}`, { password });
  }

  updateProfile(payload: Partial<User>) {
    return this.http.put<ApiResponse<{ user: User }>>(`${this.baseUrl}/profile`, payload).pipe(
      tap((res) => {
        this.currentUser.set(res.data.user);
        localStorage.setItem(USER_KEY, JSON.stringify(res.data.user));
      })
    );
  }

  changePassword(currentPassword: string, newPassword: string) {
    return this.http.put<ApiResponse<any>>(`${this.baseUrl}/change-password`, { currentPassword, newPassword });
  }

  fetchMe() {
    return this.http.get<ApiResponse<{ user: User }>>(`${this.baseUrl}/me`).pipe(
      tap((res) => {
        this.currentUser.set(res.data.user);
        localStorage.setItem(USER_KEY, JSON.stringify(res.data.user));
      })
    );
  }

  private persistSession(data: AuthResponse) {
    localStorage.setItem(TOKEN_KEY, data.accessToken);
    localStorage.setItem(REFRESH_KEY, data.refreshToken);
    localStorage.setItem(USER_KEY, JSON.stringify(data.user));
    this.currentUser.set(data.user);
  }

  getToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
  }

  logout() {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(REFRESH_KEY);
    localStorage.removeItem(USER_KEY);
    this.currentUser.set(null);
    this.router.navigate(['/auth/login']);
  }
}
