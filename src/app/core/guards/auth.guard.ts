import { inject } from '@angular/core';
import { CanActivateFn, Router, ActivatedRouteSnapshot } from '@angular/router';
import { TokenService } from '../services/auth/token.service';

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {
  const router = inject(Router);
  const tokenService = inject(TokenService);

  // 1. Not logged in
  if (!tokenService.isLoggedIn()) {
    router.navigate(['/login']);
    return false;
  }

  // 2. Role-based access check
  const allowedRoles = route.data['roles'] as string[] || [];
  const userRoles = tokenService.getRoles(); // এটা অবশ্যই string[] return করা উচিত

  const hasAccess = Array.isArray(userRoles) && userRoles.some(role => allowedRoles.includes(role));

  if (!hasAccess) {
    router.navigate(['/unauthorized']);
    return false;
  }

  return true;
};
