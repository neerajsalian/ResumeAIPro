import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { ApiResponse, AtsCheckResult, Resume, ResumeAnalysis } from '../models/models';

@Injectable({ providedIn: 'root' })
export class ResumeService {
  private baseUrl = `${environment.apiUrl}/resume`;
  private analysisUrl = `${environment.apiUrl}/analysis`;
  private atsUrl = `${environment.apiUrl}/ats`;

  constructor(private http: HttpClient) {}

  upload(file: File) {
    const form = new FormData();
    form.append('resume', file);
    return this.http.post<ApiResponse<{ resume: Resume }>>(`${this.baseUrl}/upload`, form);
  }

  list() {
    return this.http.get<ApiResponse<{ resumes: Resume[] }>>(this.baseUrl);
  }

  get(id: string) {
    return this.http.get<ApiResponse<{ resume: Resume }>>(`${this.baseUrl}/${id}`);
  }

  versionHistory(id: string) {
    return this.http.get<ApiResponse<{ history: Resume[] }>>(`${this.baseUrl}/${id}/versions`);
  }

  delete(id: string) {
    return this.http.delete<ApiResponse<any>>(`${this.baseUrl}/${id}`);
  }

  downloadUrl(id: string) {
    return `${this.baseUrl}/${id}/download`;
  }

  analyze(resumeId: string, targetJobRole?: string) {
    return this.http.post<ApiResponse<{ analysis: ResumeAnalysis }>>(`${this.analysisUrl}/${resumeId}`, { targetJobRole });
  }

  getLatestAnalysis(resumeId: string) {
    return this.http.get<ApiResponse<{ analysis: ResumeAnalysis }>>(`${this.analysisUrl}/${resumeId}`);
  }

  getAnalysisHistory() {
    return this.http.get<ApiResponse<{ analyses: ResumeAnalysis[] }>>(`${this.analysisUrl}/history/all`);
  }

  runAtsChecks(resumeId: string) {
    return this.http.get<ApiResponse<AtsCheckResult>>(`${this.atsUrl}/${resumeId}/checks`);
  }
}
