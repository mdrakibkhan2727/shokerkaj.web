import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import { RegisterComponent } from './features/auth/register/register.component';
import { DashboardComponent } from './features/admin/dashboard/dashboard.component';
import { ProfileComponent } from './features/admin/profile/profile.component';
import { authGuard } from './core/guards/auth.guard';
import { HomeComponent } from './features/web/home/home.component';
import { BirdsAndToysComponent } from './features/web/birds-and-toys/birds-and-toys.component';
import { ArtsAndPaintsComponent } from './features/web/arts-and-paints/arts-and-paints.component';
import { HomeDecorComponent } from './features/web/home-decor/home-decor.component';
import { InteriorComponent } from './features/web/interior/interior.component';
import { SuperAdminDashboardComponent } from './features/super-admin/super-admin-dashboard/super-admin-dashboard.component';

export const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  // Web Pages
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'birds-and-toys',
    component: BirdsAndToysComponent,
  },
  {
    path: 'arts-and-paints',
    component: ArtsAndPaintsComponent,
  },
  {
    path: 'home-decor',
    component: HomeDecorComponent,
  },
  {
    path: 'interior',
    component: InteriorComponent,
  },
  // SuperAdmin Dashboard Pages
  {
    path: 'super-admin/dashboard',
    component: SuperAdminDashboardComponent,
    canActivate: [authGuard],
    data: { roles: ['superadmin'] }
  },

  // Admin Dashboard Pages
  {
    path: 'businessman/dashboard',
    component: DashboardComponent,
    canActivate: [authGuard],
    data: { roles: ['superadmin', 'businessman'] }
  },
  {
    path: 'businessman/profile',
    component: ProfileComponent,
    canActivate: [authGuard],
    data: { roles: ['superadmin', 'businessman'] }
  },

  // 404 fallback
  { path: '**', redirectTo: ''}
];
