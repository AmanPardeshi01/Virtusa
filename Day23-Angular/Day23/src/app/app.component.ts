import { Component, signal, computed, effect } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
  <router-outlet></router-outlet>
<h2>Signal Counter Example</h2>
<p>Count: {{ count() }}</p>
<p>Double: {{ double() }}</p>
<button (click)="increment()">Increment</button>`
})

export class AppComponent {
  count = signal(0);

  double = computed(() => this.count() * 2);

  constructor() {
    effect(() => {
      console.log('Count changed: ', this.count());
    });

  }

  increment() {
    this.count.update(value => value + 1);
  }
}





//Asynchronus and event  based data
// import { Component } from '@angular/core';
// import { NgFor } from '@angular/common';
// import { Observable, Subject, BehaviorSubject, ReplaySubject, AsyncSubject } from 'rxjs';
// import { RouterOutlet } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet, NgFor],
//   template: `
// <div style="font-family:Arial; padding:20px;">
//   <h2 style="color:#d32f2f;">RxJS & Reactive Programming Demo</h2>

//   <button (click)="runDemo()"
//      style="margin-bottom: 20px; background-color:#fbc02d; border:none; padding:10px 20px; border-style:solid;">
//     Run Demo
//   </button>

//   <div *ngFor="let log of logs"
//        style="margin-bottom: 5px; background:#fff3cd; padding:8px; border-radius: 6px;">
//     {{ log }}
//   </div>
// </div>
// `
// })

// export class AppComponent {
//   logs: string[] = [];

//   log(msg: string) {
//     console.log(msg);
//     this.logs.push(msg);
//   }

//   runDemo() {
//     this.logs = []; // clear old logs
//     this.demoObservableVsSubject();
//     this.demoSubject();
//     this.demoBehaviorSubject();
//     this.demoReplaySubject();
//     this.demoAsyncSubject();

//   }

//   // Observable vs Subject
//   demoObservableVsSubject() {
//     this.log(' --- Observable vs Subject --- ');
//     const observable = new Observable<number>((subscriber) => {
//       subscriber.next(Math.random());
//     });

//     observable.subscribe(val => this.log('Observable A: ' + val));
//     observable.subscribe(val => this.log('Observable B: ' + val));



//   }
//   demoSubject() {
//     this.log('----Subject Example----')

//     const subject = new Subject<string>();
//     subject.subscribe(data => this.log('Subscriber 1: ' + data));
//     subject.subscribe(data => this.log('Subscriber 2: ' + data));

//     subject.next('Hello RxJS');
//     subject.next('Multicasting in action!');
//   }

//   demoBehaviorSubject() {
//     this.log('---BehaviorSubject Example---');
//     const behaviorSubject = new BehaviorSubject<number>(0);
//     behaviorSubject.subscribe(data => this.log('Subscriber 1: ' + data));

//     behaviorSubject.next(1);
//     behaviorSubject.next(2);

//     behaviorSubject.subscribe(data => this.log('Subscriber 2: ' + data));

//     behaviorSubject.next(3);
//   }

//   demoReplaySubject() {
//     this.log('---Replay Subject Example---');
//     const replaySubject = new ReplaySubject<number>(2);

//     replaySubject.next(10);
//     replaySubject.next(20);
//     replaySubject.next(30);

//     replaySubject.subscribe(data => this.log(`Subscriber 1:` + data));

//     replaySubject.next(40);
//   }

//   demoAsyncSubject() {
//     this.log('---Async Subject Example---');
//     const asyncSubject = new AsyncSubject<number>();

//     asyncSubject.subscribe(data => this.log('Subscriber 1: ' + data));
//     asyncSubject.next(100);
//     asyncSubject.next(200);
//     asyncSubject.next(300);

//     asyncSubject.subscribe(data => this.log('Subscriber 2: ' + data));

//     asyncSubject.complete();
//   }

// }


