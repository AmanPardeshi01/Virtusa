import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const user = localStorage.getItem('user');
    if (user) return true;  // User is logged in
    alert('Please login first!');
    this.router.navigate(['/login']);
    return false;  // Deny access if not logged in
  }
}

