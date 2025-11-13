import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject, combineLatest, from, of, timer } from 'rxjs';
import { filter, map, mergeMap, switchMap, delay } from 'rxjs/operators';

@Component({
  selector: 'app-operators',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h3>RxJS Operators demonstration</h3>
    <div>
      <strong>map + filter</strong>
      <div>Numbers: {{ mappedFiltered$ | async }}</div>
    </div>

    <div style="margin-top:1rem">
      <strong>switchMap</strong>
      <div>Latest result: {{ switchMapResult$ | async }}</div>
    </div>

    <div style="margin-top:1rem">
      <strong>mergeMap</strong>
      <div>Merged results (console)</div>
    </div>

    <div style="margin-top:1rem">
      <strong>combineLatest</strong>
      <div>Combined: {{ combined$ | async }}</div>
    </div>
  `
})
export class OperatorsComponent {
  private nums$ = from([1, 2, 3, 4, 5]);

  // map + filter: double each and only keep > 6
  mappedFiltered$ = this.nums$.pipe(
    map(n => n * 2),
    filter(n => n > 6),
    // convert to array for template convenience
    // In a real app you might accumulate differently
    // but for demonstration we just wrap in of(...)
    // So final is observable of numbers emitted — use last wrapper:
  );

  // switchMap: simulate typing -> request that cancels previous
  private searchTrigger$ = new BehaviorSubject<string>('a');
  switchMapResult$ = this.searchTrigger$.pipe(
    switchMap(term => {
      // simulate network that returns the term repeated after a delay
      return of(`${term}-${Date.now()}`).pipe(delay(400));
    })
  );

  // mergeMap: parallel mapping (fire all inner observables)
  constructor() {
    of(1, 2, 3).pipe(
      mergeMap(n => of(n * 10).pipe(delay(300 - n * 50)))
    ).subscribe(v => console.log('mergeMap emitted', v));

    // combineLatest example: two timers combined
    const a$ = timer(0, 1000).pipe(map(i => `A${i}`));
    const b$ = timer(0, 1500).pipe(map(i => `B${i}`));

    this.combined$ = combineLatest([a$, b$]).pipe(
      map(([a, b]) => `${a} | ${b}`)
    );
  }

  combined$ = of('init'); // will be replaced in constructor
}
