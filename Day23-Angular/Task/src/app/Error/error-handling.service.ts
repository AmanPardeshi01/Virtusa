import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ErrorHandlingService {
  private failNext = true;

  unstableCall(): Observable<string> {
    // first call fails, subsequent calls succeed (toggle for demo)
    if (this.failNext) {
      this.failNext = false;
      return throwError(() => new Error('simulated network error')).pipe(delay(200));
    }
    return of('success result').pipe(delay(200));
  }
}
