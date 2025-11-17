import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  // templateUrl: './child.component.html',
  template:`
  <p>The user's occupation is {{occupation}}</p>
  `,
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() occupation = '';
}
