import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

// Import all your standalone components
import { SearchComponent } from '../app/Reactive Programming/search.component';
import { TakeUntilComponent } from '../app/Memory Management/take-until.component';
import { AsyncPipeComponent } from '../app/Memory Management/async-pipe.component';
import { OperatorsComponent } from '../app/RxJS Operators/operators.component';
import { ErrorHandlingComponent } from '../app/Error/error-handling.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    SearchComponent,
    TakeUntilComponent,
    AsyncPipeComponent,
    OperatorsComponent,
    ErrorHandlingComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Task';
}
