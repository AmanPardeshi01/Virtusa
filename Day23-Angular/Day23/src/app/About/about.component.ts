import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page about">
      <h2>About Page</h2>
      <a routerLink="/">Back to Home</a>
    </section>
  `,
})
export class AboutComponent {}