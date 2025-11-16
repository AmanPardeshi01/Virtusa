import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './auth.guard';
import { RoleGuard } from './role.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },  // Home route
  { path: 'login', component: LoginComponent },  // Login route
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard],  // Protected by AuthGuard
    data: { title: 'User Profile' }
  },
  {
    path: 'admin',
    canActivate: [AuthGuard, RoleGuard],  // Protected by AuthGuard and RoleGuard
    loadChildren: () => import('./admin/admin.routes').then(m => m.ADMIN_ROUTES)  // Lazy loading admin routes
  },
  { path: '**', redirectTo: '' }  // Wildcard route for unknown paths
];
