import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { ApiResponse, Interview, InterviewAnswer, InterviewQuestion, InterviewType } from '../models/models';

@Injectable({ providedIn: 'root' })
export class InterviewService {
  private textUrl = `${environment.apiUrl}/interview`;
  private voiceUrl = `${environment.apiUrl}/voice-interview`;

  constructor(private http: HttpClient) {}

  private urlFor(mode: 'text' | 'voice') {
    return mode === 'voice' ? this.voiceUrl : this.textUrl;
  }

  create(payload: { resumeId: string; interviewType: InterviewType; jobRole?: string; mode: 'text' | 'voice'; questionCount?: number }) {
    return this.http.post<ApiResponse<{ interview: Interview; questions: InterviewQuestion[] }>>(
      this.urlFor(payload.mode),
      payload
    );
  }

  list() {
    return this.http.get<ApiResponse<{ interviews: Interview[] }>>(this.textUrl);
  }

  get(id: string, mode: 'text' | 'voice' = 'text') {
    return this.http.get<ApiResponse<{ interview: Interview; questions: InterviewQuestion[]; answers: InterviewAnswer[] }>>(
      `${this.urlFor(mode)}/${id}`
    );
  }

  submitAnswer(id: string, mode: 'text' | 'voice', payload: { questionId: string; answerText: string; responseTimeSeconds?: number; recordingUrl?: string }) {
    return this.http.post<ApiResponse<{ answer: InterviewAnswer }>>(`${this.urlFor(mode)}/${id}/answer`, payload);
  }

  complete(id: string, mode: 'text' | 'voice') {
    return this.http.post<ApiResponse<{ interview: Interview; qaPairs: any[] }>>(`${this.urlFor(mode)}/${id}/complete`, {});
  }

  abandon(id: string, mode: 'text' | 'voice') {
    return this.http.post<ApiResponse<any>>(`${this.urlFor(mode)}/${id}/abandon`, {});
  }
}
