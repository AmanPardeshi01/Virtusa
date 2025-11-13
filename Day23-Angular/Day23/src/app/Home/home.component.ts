import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page home">
      <h2>Home Page</h2>
      <a routerLink="/about">Go to About</a>
    </section>
  `,
})
export class HomeComponent {}