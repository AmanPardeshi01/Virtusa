import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>{{ count }}</h3>
    <button (click)="increment()">Increment</button>
  `
})
export class CounterComponent {
  count = 0;

  increment() {
    this.count++;
  }
}
