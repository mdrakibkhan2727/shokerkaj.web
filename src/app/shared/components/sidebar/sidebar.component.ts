import { Component, OnInit } from '@angular/core';
import { SidebarItem,SIDEBAR_ITEMS } from '../../../core/sidebar/sidebar-menu';
import { TokenService } from '../../../core/services/auth/token.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterLink],
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  sidebarItems: SidebarItem[] = [];

  constructor(private tokenService: TokenService) {}

ngOnInit(): void {
  const isLoggedIn = this.tokenService.isLoggedIn();
  const userRoles = this.tokenService.getRoles();

  this.sidebarItems = SIDEBAR_ITEMS.map(item => {
    // Filter based on login status and roles
    const hasAccess = (
      (!item.roles && (!item.hideWhenLoggedIn || !isLoggedIn)) ||
      (isLoggedIn && item.roles?.some(role => userRoles.includes(role)))
    );

    // Filter children recursively
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
}
