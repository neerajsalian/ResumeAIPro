import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { AdminStats, ApiResponse, Report, User } from '../models/models';

@Injectable({ providedIn: 'root' })
export class AdminService {
  private baseUrl = `${environment.apiUrl}/admin`;

  constructor(private http: HttpClient) {}

  getStats() {
    return this.http.get<ApiResponse<AdminStats>>(`${this.baseUrl}/stats`);
  }

  listUsers(page = 1, limit = 20, search = '') {
    return this.http.get<ApiResponse<{ users: User[]; total: number; page: number; limit: number }>>(
      `${this.baseUrl}/users?page=${page}&limit=${limit}&search=${encodeURIComponent(search)}`
    );
  }

  getUserDetail(id: string) {
    return this.http.get<ApiResponse<{ user: User; resumes: any[]; interviews: any[] }>>(`${this.baseUrl}/users/${id}`);
  }

  setUserStatus(id: string, isActive: boolean) {
    return this.http.put<ApiResponse<{ user: User }>>(`${this.baseUrl}/users/${id}/status`, { isActive });
  }

  setUserRole(id: string, role: 'candidate' | 'admin') {
    return this.http.put<ApiResponse<{ user: User }>>(`${this.baseUrl}/users/${id}/role`, { role });
  }

  deleteUser(id: string) {
    return this.http.delete<ApiResponse<any>>(`${this.baseUrl}/users/${id}`);
  }

  listAllReports() {
    return this.http.get<ApiResponse<{ reports: Report[] }>>(`${this.baseUrl}/reports`);
  }
}
