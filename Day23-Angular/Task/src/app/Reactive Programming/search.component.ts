import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, switchMap, tap } from 'rxjs/operators';
import { SearchService } from './search.service'; // your mock/http service

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div style="padding:12px;border:1px solid #e1e1e1;border-radius:6px;">
      <label><strong>Debounced search (switchMap cancels previous)</strong></label>
      <input [formControl]="query" placeholder="Type to search..." style="display:block;margin:8px 0;padding:6px;width:100%" />
      <div *ngIf="loading">loading…</div>
      <ul>
        <li *ngFor="let item of (results$ | async)">{{ item }}</li>
      </ul>
    </div>
  `
})
export class SearchComponent {
  query = new FormControl<string | null>('');
  results$: Observable<string[]>;
  loading = false;

  constructor(private searchService: SearchService) {
    this.results$ = this.query.valueChanges.pipe(
      debounceTime(250),
      distinctUntilChanged(),
      // <-- type predicate here: narrows `string | null` to `string`
      filter((q): q is string => typeof q === 'string' && q.trim().length > 0),
      tap(() => (this.loading = true)),
      switchMap((term: string) =>
        this.searchService.search(term).pipe(
          tap(() => (this.loading = false))
        )
      )
    );
  }
}
