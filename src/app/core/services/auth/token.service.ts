import { Injectable } from '@angular/core';
import { JwtPayload } from '../../models/auth/jwt-payload';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  getToken(): string | null {
    return localStorage.getItem('token') || sessionStorage.getItem('token');
  }

  getDecodedToken(): JwtPayload | null {
    const token = this.getToken();
    if (!token) return null;
    try {
      return jwtDecode<JwtPayload>(token);
    } catch {
      return null;
    }
  }

  getRoles(): string[] {
    const token = this.getDecodedToken();
    const roles = token?.role;

    if (Array.isArray(roles)) return roles;
    if (typeof roles === 'string') return [roles];
    return [];
  }


  isLoggedIn(): boolean {
    const decoded = this.getDecodedToken();
    return !!decoded && decoded.exp > (Date.now() / 1000);
  }
}
