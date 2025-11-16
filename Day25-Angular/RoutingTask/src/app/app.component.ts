import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink   // 🔥 Required for routerLink in template
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {}
