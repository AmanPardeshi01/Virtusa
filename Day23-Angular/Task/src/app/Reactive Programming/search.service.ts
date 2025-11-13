import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class SearchService {
  // Mock search: returns array of strings after 400ms
  search(term: string): Observable<string[]> {
    const data = [
      'apple', 'apricot', 'banana', 'blueberry', 'blackberry', 'cherry',
      'date', 'fig', 'grape', 'grapefruit', 'kiwi', 'lemon', 'lime'
    ];
    const results = data.filter(d => d.toLowerCase().includes(term.toLowerCase()));
    // simulate network latency
    return of(results).pipe(delay(400));
  }
}
