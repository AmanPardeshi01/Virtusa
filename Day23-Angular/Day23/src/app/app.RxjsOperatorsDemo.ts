import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { of, interval, combineLatest, map, filter, switchMap, mergeMap, take, delay } from 'rxjs';

@Component({
  selector: 'app-rxjs-operators-demo',
  standalone: true,
  imports: [CommonModule, NgFor],
  template: `
    <div style="font-family:Arial; padding:20px;">
      <h2 style="color:#1976d2;">RxJS Operators Demo</h2>
      <button (click)="runDemo()"
        style="background:#42a5f5; color:white; border:none; padding:10px 20px; border-radius:8px; cursor:pointer;">
        Run Demo
      </button>

      <div *ngFor="let log of logs"
           style="margin-top:8px; background:#e3f2fd; padding:8px; border-radius:6px;">
        {{ log }}
      </div>
    </div>
  `
})
export class RxjsOperatorsDemoComponent {
  logs: string[] = [];

  log(msg: string) {
    console.log(msg);
    this.logs.push(msg);
  }

  runDemo() {
    this.logs = [];
    this.demoMap();
    this.demoFilter();
    this.demoSwitchMap();
    this.demoMergeMap();
    this.demoCombineLatest();
  }

  demoMap() {
    this.log('--- map() Example ---');
    of(1, 2, 3)
      .pipe(map(num => num * 10))
      .subscribe(val => this.log('map -> ' + val));
  }

  demoFilter() {
    this.log('--- filter() Example ---');
    of(1, 2, 3, 4, 5)
      .pipe(filter(num => num % 2 === 0))
      .subscribe(val => this.log('filter -> ' + val));
  }

  demoSwitchMap() {
    this.log('--- switchMap() Example ---');
    of('User1', 'User2')
      .pipe(
        switchMap(user => of(`${user} profile loaded`).pipe(delay(1000)))
      )
      .subscribe(val => this.log('switchMap -> ' + val));
  }

  demoMergeMap() {
    this.log('--- mergeMap() Example ---');
    of('Task1', 'Task2')
      .pipe(
        mergeMap(task => of(`${task} processed`).pipe(delay(1000)))
      )
      .subscribe(val => this.log('mergeMap -> ' + val));
  }

  demoCombineLatest() {
    this.log('--- combineLatest() Example ---');
    const source1 = interval(1000).pipe(take(3));
    const source2 = interval(1500).pipe(take(3));

    combineLatest([source1, source2])
      .pipe(map(([a, b]) => `combineLatest -> A:${a}, B:${b}`))
      .subscribe(val => this.log(val));
  }
}

