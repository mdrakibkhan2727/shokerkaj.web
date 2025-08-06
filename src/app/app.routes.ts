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
import { CategoryComponent } from './features/super-admin/category/category.component';
import { SliderComponent } from './features/super-admin/slider/slider.component';
import { AboutUsComponent } from './features/web/about-us/about-us.component';
import { ContactUsComponent } from './features/web/contact-us/contact-us.component';
import { AiPromptComponent } from './features/web/ai-prompt/ai-prompt.component';
import { ShopComponent } from './features/web/shop/shop.component';

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
    data: { category: 'Birds' }
  },
  {
    path: 'arts-and-paints',
    component: ArtsAndPaintsComponent,
    data: { category: 'Arts & Paints' }
  },
  {
    path: 'home-decor',
    component: HomeDecorComponent,
    data: { category: 'Home Decor' }
  },
  {
    path: 'interior',
    component: InteriorComponent,
    data: { category: 'Interior' }
  },
  {
    path: 'shop',
    component: ShopComponent,
    data: { shop: 'shop' }
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
    data: { about: 'about-us' }
  },
  {
    path: 'contact-us',
    component: ContactUsComponent,
    data: { contact: 'contact-us' }
  },
  {
    path: 'ai-prompt',
    component: AiPromptComponent,
    data: { ai_prompt: 'ai-prompt' }
  },
  // SuperAdmin Dashboard Pages
  {
    path: 'super-admin/dashboard',
    component: SuperAdminDashboardComponent,
    canActivate: [authGuard],
    data: { roles: ['superadmin'] }
  },
  {
    path: 'super-admin/category',
    component: CategoryComponent,
    canActivate: [authGuard],
    data: { roles: ['superadmin'] }
  },
  {
    path: 'super-admin/slider',
    component: SliderComponent,
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
