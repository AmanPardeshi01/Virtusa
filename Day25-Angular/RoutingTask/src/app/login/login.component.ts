import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  template: `
    <h2>Login Page</h2>
    <button (click)="loginAsUser()">Login as User</button>
    <button (click)="loginAsAdmin()">Login as Admin</button>
  `
})
export class LoginComponent {
  constructor(private router: Router) {}

  loginAsUser() {
    localStorage.setItem('user', JSON.stringify({ role: 'user' }));
    this.router.navigate(['/profile']);
  }

  loginAsAdmin() {
    localStorage.setItem('user', JSON.stringify({ role: 'admin' }));
    this.router.navigate(['/admin']);
  }
}
