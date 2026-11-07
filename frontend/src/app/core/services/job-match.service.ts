import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { ApiResponse, JobMatch } from '../models/models';

@Injectable({ providedIn: 'root' })
export class JobMatchService {
  private baseUrl = `${environment.apiUrl}/job-match`;

  constructor(private http: HttpClient) {}

  match(resumeId: string, payload: { title?: string; company?: string; jdText: string }) {
    return this.http.post<ApiResponse<{ jobMatch: JobMatch }>>(`${this.baseUrl}/${resumeId}`, payload);
  }

  list() {
    return this.http.get<ApiResponse<{ matches: JobMatch[] }>>(this.baseUrl);
  }

  get(id: string) {
    return this.http.get<ApiResponse<{ jobMatch: JobMatch }>>(`${this.baseUrl}/${id}`);
  }
}
