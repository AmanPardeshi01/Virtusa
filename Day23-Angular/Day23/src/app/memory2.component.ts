import { Component } from '@angular/core';
import { interval, map } from 'rxjs';
import { AsyncPipe, NgIf } from '@angular/common';

@Component({
    selector: 'app-async-pipe-demo',
    standalone: true,
    imports: [AsyncPipe, NgIf],
    template: `
    <p *ngIf="timer$ | async as time">
        Timer: {{ time}}
    </p>
    `
})

export class AsyncPipeDemoComponent {
    timer$ = interval(1000).pipe(map(val => val + 1));
}
