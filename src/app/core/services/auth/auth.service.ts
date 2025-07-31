import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, signal } from '@angular/core';
import { SERVER_URL } from '../../../app.config';
import { LoginInfo } from '../../models/auth/login';
import { RegisterInfo } from '../../models/auth/register';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private http: HttpClient,
    @Inject(SERVER_URL) private baseUrl: string,
    private router: Router
  ) { }

  proceedLogin(_data: LoginInfo): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'account/login', _data);
  }

  proceedRegister(_data: RegisterInfo): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'account/register', _data);
  }

  // Logout method to clear session and localStorage, and update UI
  logout(): void {
    // Clear JWT token from sessionStorage or localStorage
    sessionStorage.removeItem('token');
    localStorage.removeItem('token');

    // Redirect to login page
    this.router.navigate(['/login']);
  }

}
