import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { interval, map } from 'rxjs';

@Component({
  selector: 'app-async-pipe',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h3>async pipe — Angular manages unsubscription</h3>
    <p>Seconds elapsed: {{ seconds$ | async }}</p>
  `
})
export class AsyncPipeComponent {
  seconds$ = interval(1000).pipe(map(i => i + 1));
}
