import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorHandlingService } from './error-handling.service';
import { catchError, retry, retryWhen, delay, scan, tap, of } from 'rxjs';

@Component({
  selector: 'app-error-handling',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h3>Error handling demo</h3>

    <button (click)="callOnce()">Call (catchError -> fallback)</button>
    <div>Result: {{ result1 }}</div>

    <hr>

    <button (click)="callWithRetry()">Call with retry(2)</button>
    <div>Result: {{ result2 }}</div>

    <hr>

    <button (click)="callWithRetryWhen()">Call with retryWhen exponential</button>
    <div>Result: {{ result3 }}</div>
  `
})
export class ErrorHandlingComponent {
  result1 = '';
  result2 = '';
  result3 = '';

  constructor(private svc: ErrorHandlingService) {}

  callOnce() {
    this.svc.unstableCall().pipe(
      catchError(err => {
        console.warn('caught:', err.message);
        // fallback value so stream recovers
        return of('fallback value');
      })
    ).subscribe(v => this.result1 = String(v));
  }

  callWithRetry() {
    this.svc.unstableCall().pipe(
      retry(2), // try up to 3 times total (initial + 2 retries)
      catchError(err => {
        // final failure after retries
        return of('failed after retries: ' + err.message);
      })
    ).subscribe(v => this.result2 = String(v));
  }

  callWithRetryWhen() {
    this.svc.unstableCall().pipe(
      retryWhen(errors =>
        errors.pipe(
          // count retries, delay between retries, give up after 3
          scan((acc, err) => {
            if (acc >= 2) {
              throw err; // rethrow to fail the retryWhen observable
            }
            return acc + 1;
          }, 0),
          tap(i => console.log('retryWhen attempt', i)),
          delay(500) // fixed backoff; could use exponential backoff
        )
      ),
      catchError(err => of('retryWhen failed: ' + err.message))
    ).subscribe(v => this.result3 = String(v));
  }
}
