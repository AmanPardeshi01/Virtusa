import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class RoleGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (user.role === 'admin') return true;  // Allow access if role is admin
    alert('Access denied: Admins only!');
    this.router.navigate(['/']);  // Redirect to home if not an admin
    return false;  // Deny access
  }
}

