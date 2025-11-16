import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  template: `
    <h2>{{ title }}</h2>
    <p>Welcome, logged-in user!</p>
  `
})
export class ProfileComponent {
  title = '';
  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe(d => this.title = d['title']);
  }
}
