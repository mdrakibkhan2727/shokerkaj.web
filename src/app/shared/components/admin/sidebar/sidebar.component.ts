import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../core/services/auth/auth.service';
import { TokenService } from '../../../../core/services/auth/token.service';
import { RouterLink } from '@angular/router';
import { SidebarItem,SIDEBAR_ITEMS } from '../../../../core/sidebar/sidebar-menu';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-server-sidebar',
  imports: [CommonModule,RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']  // plural
})
export class SidebarComponent implements OnInit {
  isAuthenticated = false;
  sidebarItems: SidebarItem[] = [];

  constructor(
    private authService: AuthService,
    private tokenService: TokenService
  ) { }

  ngOnInit(): void {
    const isLoggedIn = this.tokenService.isLoggedIn();
    const userRoles = this.tokenService.getRoles();
    this.isAuthenticated = !!localStorage.getItem('token') || !!sessionStorage.getItem('token');

    this.sidebarItems = SIDEBAR_ITEMS.map(item => {
      // Check access rights
      const hasAccess = (
        (!item.roles && (!item.hideWhenLoggedIn || !isLoggedIn)) ||
        (isLoggedIn && item.roles?.some(role => userRoles.includes(role)))
      );

      // Filter children items recursively based on roles and login
      const filteredChildren = item.children?.filter(child =>
        (!child.roles && (!child.hideWhenLoggedIn || !isLoggedIn)) ||
        (isLoggedIn && child.roles?.some(role => userRoles.includes(role)))
      );

      if (filteredChildren && filteredChildren.length > 0) {
        return { ...item, children: filteredChildren };
      }

      if (!item.children && hasAccess) {
        return item;
      }

      return null;
    }).filter(item => item !== null) as SidebarItem[];
  }

onItemClick(item: SidebarItem, event: Event): void {
  event.preventDefault();

  if (item.label === 'Logout') {
    this.logout();
  }
}


  toggleDropdown(item: any): void {
      item.isOpen = !item.isOpen;
    }
  logout() {
    this.authService.logout();
    this.isAuthenticated = false;
  }
}
