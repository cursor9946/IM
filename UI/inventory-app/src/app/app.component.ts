import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  template: `
    <header>
      <h1>Inventory Management System</h1>
      <nav>
        <ul>
          <li><a routerLink="/home" routerLinkActive="active">Home</a></li>
          <li><a routerLink="/login" routerLinkActive="active">Login</a></li>
        </ul>
      </nav>
    </header>

    <main>
      <router-outlet></router-outlet>
    </main>

    <footer>
      <p>© 2024 Inventory Management System</p>
    </footer>
  `,
  styles: [`
    header {
      background: #f8f9fa;
      padding: 1rem;
      text-align: center;
    }
    nav {
      padding: 1rem;
    }
    nav ul {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      justify-content: center;
      gap: 2rem;
    }
    nav a {
      text-decoration: none;
      color: #333;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      transition: background-color 0.3s;
    }
    nav a:hover {
      background-color: #e9ecef;
    }
    nav a.active {
      background-color: #007bff;
      color: white;
    }
    main {
      padding: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }
    footer {
      text-align: center;
      padding: 1rem;
      background: #f8f9fa;
      position: fixed;
      bottom: 0;
      width: 100%;
    }
  `]
})
export class AppComponent {
  title = 'inventory-app';
}