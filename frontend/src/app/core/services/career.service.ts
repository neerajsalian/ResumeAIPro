import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { ApiResponse, CareerGuidance } from '../models/models';

@Injectable({ providedIn: 'root' })
export class CareerService {
  private baseUrl = `${environment.apiUrl}/career`;

  constructor(private http: HttpClient) {}

  getGuidance(resumeId: string, targetJobRole?: string) {
    const params = targetJobRole ? `?targetJobRole=${encodeURIComponent(targetJobRole)}` : '';
    return this.http.get<ApiResponse<{ guidance: CareerGuidance }>>(`${this.baseUrl}/guidance/${resumeId}${params}`);
  }
}
