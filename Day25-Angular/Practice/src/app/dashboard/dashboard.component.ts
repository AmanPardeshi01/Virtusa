import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { StudentListComponent } from '../student-list/student-list.component';
import { StudentDetailComponent } from '../student-detail/student-detail.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    HeaderComponent,
    SidebarComponent,
    StudentListComponent,
    StudentDetailComponent,
    FooterComponent
  ],
  template: `
    <app-header></app-header>

    <div class="main-layout">
      <app-sidebar></app-sidebar>

      <div class="content">
        <app-student-list></app-student-list>
        <hr />
        <app-student-detail></app-student-detail>
      </div>
    </div>

    <app-footer></app-footer>
  `,
  styles: [`
    .main-layout {
      display: flex;
    }
    .content {
      padding: 20px;
      flex: 1;
    }
  `]
})
export class DashboardComponent {}
