import { Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { ManageUsersComponent } from './manage-users.component';

export const ADMIN_ROUTES: Routes = [
  { path: '', component: AdminDashboardComponent },
  { path: 'users/:id', component: ManageUsersComponent }
];
