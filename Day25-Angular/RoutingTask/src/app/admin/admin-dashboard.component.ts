import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  template: `
    <h2>Admin Dashboard</h2>
    <button (click)="viewUser(101)">View User #101</button>
  `
})
export class AdminDashboardComponent {
  constructor(private router: Router) {}

  viewUser(id: number) {
    // Navigate to the manage-users route with the dynamic ID and query parameters
    this.router.navigate(['admin/users', id], { queryParams: { action: 'edit' } });
  }
}
