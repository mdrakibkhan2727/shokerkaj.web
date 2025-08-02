import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import { RegisterComponent } from './features/auth/register/register.component';
import { DashboardComponent } from './features/admin/dashboard/dashboard.component';
import { ProfileComponent } from './features/admin/profile/profile.component';
import { AdminAboutComponent } from './features/admin/admin-about/admin-about.component';
import { BusinessmanExperienceComponent } from './features/admin/businessman-experience/businessman-experience.component';
import { AdminVideosComponent } from './features/admin/admin-videos/admin-videos.component';
import { NewBusinessmanComponent } from './features/user/new-businessman/new-businessman.component';
import { CrowdfundingComponent } from './features/user/crowdfunding/crowdfunding.component';
import { UserBlogPostComponent } from './features/user/user-blog-post/user-blog-post.component';
import { UserCrowdfundingPlaylistComponent } from './features/user/user-crowdfunding-playlist/user-crowdfunding-playlist.component';
import { BooksComponent } from './features/admin/books/books.component';
import { AdminVarificationComponent } from './features/admin/admin-varification/admin-varification.component';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'admin/dashboard', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  // Admin Dashboard
  {
    path: 'admin/dashboard',
    component: DashboardComponent,
    // canActivate: [authGuard],
    // data: { roles: ['superadmin', 'teacher', 'businessman', 'newbusinessman'] }
  },

  // Businessman
  {
    path: 'businessman/profile',
    component: ProfileComponent,
    canActivate: [authGuard],
    data: { roles: ['superadmin', 'businessman'] }
  },
  {
    path: 'businessman/about',
    component: AdminAboutComponent,
    canActivate: [authGuard],
    data: { roles: ['superadmin', 'businessman'] }
  },
  {
    path: 'businessman/experience',
    component: BusinessmanExperienceComponent,
    canActivate: [authGuard],
    data: { roles: ['superadmin', 'businessman'] }
  },

  // Teacher
  {
    path: 'teacher/profile',
    component: ProfileComponent,
    canActivate: [authGuard],
    data: { roles: ['superadmin', 'teacher'] }
  },
  {
    path: 'teacher/videos',
    component: AdminVideosComponent,
    canActivate: [authGuard],
    data: { roles: ['superadmin', 'teacher'] }
  },

  // New Businessman
  {
    path: 'newbusinessman/dashboard',
    component: NewBusinessmanComponent,
    canActivate: [authGuard],
    data: { roles: ['superadmin', 'newbusinessman'] }
  },
  {
    path: 'subscriptions',
    component: CrowdfundingComponent,
    canActivate: [authGuard],
    data: { roles: ['superadmin', 'newbusinessman'] }
  },
  {
    path: 'blog',
    component: UserBlogPostComponent,
    canActivate: [authGuard],
    data: { roles: ['superadmin', 'newbusinessman'] }
  },
  {
    path: 'ideas',
    component: UserCrowdfundingPlaylistComponent,
    canActivate: [authGuard],
    data: { roles: ['superadmin', 'newbusinessman'] }
  },

  // Public but protected for all roles
  {
    path: 'faq',
    component: BooksComponent,
    canActivate: [authGuard],
    data: { roles: ['superadmin', 'businessman', 'teacher', 'newbusinessman'] }
  },
  {
    path: 'help',
    component: AdminVarificationComponent,
    canActivate: [authGuard],
    data: { roles: ['superadmin', 'businessman', 'teacher', 'newbusinessman'] }
  },


  // 404 fallback
  { path: '**', redirectTo: 'admin/dashboard'}
];
