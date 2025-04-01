import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiConfigService {
  private baseUrl = 'http://localhost:8080/IM'; // for local development

  getEndpoint(path: string): string {
    return `${this.baseUrl}/${path}`;
  }

  // Add endpoints here
  endpoints = {
    login: () => this.getEndpoint('login'),
    hello: () => this.getEndpoint('hello'),
    // Add more endpoints as needed
  };
} 