import { Routes } from '@angular/router';
import { ApiTestComponent } from './components/api-test/api-test.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: ApiTestComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '/home' }  // Catch all route for 404
];
