import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { ApiResponse, Report } from '../models/models';

@Injectable({ providedIn: 'root' })
export class ReportService {
  private baseUrl = `${environment.apiUrl}/reports`;

  constructor(private http: HttpClient) {}

  generateResumeReport(analysisId: string) {
    return this.http.post<ApiResponse<{ report: Report }>>(`${this.baseUrl}/resume-analysis/${analysisId}`, {});
  }

  generateInterviewReport(interviewId: string) {
    return this.http.post<ApiResponse<{ report: Report }>>(`${this.baseUrl}/interview/${interviewId}`, {});
  }

  list() {
    return this.http.get<ApiResponse<{ reports: Report[] }>>(this.baseUrl);
  }

  downloadUrl(id: string) {
    return `${this.baseUrl}/${id}/download`;
  }

  email(id: string, email?: string) {
    return this.http.post<ApiResponse<any>>(`${this.baseUrl}/${id}/email`, { email });
  }
}
