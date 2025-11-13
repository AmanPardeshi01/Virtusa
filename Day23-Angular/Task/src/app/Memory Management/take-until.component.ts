import { Component, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { interval, Subject, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-take-until',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h3>takeUntil + ngOnDestroy</h3>
    <p>Ticks: {{ ticks }}</p>
    <button (click)="stop()">stop early</button>
  `
})
export class TakeUntilComponent implements OnDestroy {
  private destroy$ = new Subject<void>();
  ticks = 0;

  constructor() {
    // example subscription to a long-running stream
    interval(1000).pipe(
      takeUntil(this.destroy$),
      tap(v => this.ticks = v + 1)
    ).subscribe();
  }

  stop() {
    this.destroy$.next();
    this.destroy$.complete(); // stops subscription
  }

  ngOnDestroy(): void {
    // ensure any remaining subscriptions are cleaned
    this.destroy$.next();
    this.destroy$.complete();
  }
}
