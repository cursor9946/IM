import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-api-test',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './api-test.component.html',
  styleUrl: './api-test.component.scss'
})
export class ApiTestComponent implements OnInit {
  data: any[] = [];
  loading = false;
  error: string | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.loading = true;
    this.http.get('https://im-s12w.onrender.com/IM/login').subscribe({
      next: (response: any) => {
        console.log('Response:', response);
        this.data = Array.isArray(response) ? response : [response];
        this.loading = false;
      },
      error: (error) => {
        console.error('Error details:', error);
        this.error = 'Error fetching data: ' + error.message;
        this.loading = false;
      }
    });
  }
}