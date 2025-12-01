import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { TempComponent } from "./temp/temp.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DashboardComponent, TempComponent],
  // templateUrl: './app.component.html',
  template:`
  <h1 style="color: red;"> Starting learning  {{tech}}.</h1>
 <app-dashboard/>
  <app-temp/>

 `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Practice';
  tech = 'Angular';

}
