import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiConfigService {
  private baseUrl = environment.apiUrl;

  getEndpoint(path: string): string {
    return `${this.baseUrl}/${path}`;
  }

  // Add endpoints here
  endpoints = {
    login: () => this.getEndpoint('login'),
    // Add more endpoints as needed
  };
} 