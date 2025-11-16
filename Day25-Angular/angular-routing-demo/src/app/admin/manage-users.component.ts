import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manage-users',
  standalone: true,
  template: `
    <h3>User Details</h3>
    <p>User ID: {{ userId }}</p>
    <p>Query Action: {{ action }}</p>
  `
})
export class ManageUsersComponent {
  userId = '';
  action = '';
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(p => this.userId = p['id']);
    this.route.queryParams.subscribe(q => this.action = q['action']);
  }
}
