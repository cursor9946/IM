import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApiConfigService } from '../../services/api-config.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [ApiConfigService],
  template: `
    <div class="login-container">
      <h2>Login</h2>
      <form (ngSubmit)="onSubmit()" #loginForm="ngForm">
        <div class="form-group">
          <label for="username">Username:</label>
          <input 
            type="text" 
            id="username" 
            name="username" 
            [(ngModel)]="loginData.username" 
            required>
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input 
            type="password" 
            id="password" 
            name="password" 
            [(ngModel)]="loginData.password" 
            required>
        </div>
        <button type="submit" [disabled]="!loginForm.form.valid">Login</button>
      </form>
      <div *ngIf="error" class="error">
        {{ error }}
      </div>
    </div>
  `,
  styles: [`
    .login-container {
      max-width: 400px;
      margin: 2rem auto;
      padding: 2rem;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      background: white;
    }
    .form-group {
      margin-bottom: 1rem;
    }
    label {
      display: block;
      margin-bottom: 0.5rem;
    }
    input {
      width: 100%;
      padding: 0.5rem;
      border: 1px solid #ddd;
      border-radius: 4px;
    }
    button {
      width: 100%;
      padding: 0.75rem;
      background: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    button:disabled {
      background: #ccc;
    }
    .error {
      color: #dc3545;
      margin-top: 1rem;
      text-align: center;
    }
  `]
})
export class LoginComponent {
  loginData = {
    username: '',
    password: ''
  };
  error: string | null = null;

  constructor(
    private http: HttpClient,
    private router: Router,
    private apiConfig: ApiConfigService
  ) {}

  onSubmit() {
    this.http.post(this.apiConfig.endpoints.login(), this.loginData).subscribe({
      next: (response: any) => {
        // Handle successful login
        console.log('Login successful:', response);
        this.router.navigate(['/home']);
      },
      error: (error) => {
        this.error = 'Login failed. Please check your credentials.';
        console.error('Login error:', error);
      }
    });
  }
} 