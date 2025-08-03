import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, signal } from '@angular/core';
import { LoginInfo } from '../../models/auth/login';
import { RegisterInfo } from '../../models/auth/register';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
    private apiUrl = `${environment.apiUrl}`;
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  proceedLogin(_data: LoginInfo): Observable<any> {
    return this.http.post<any>(this.apiUrl + 'account/login', _data);
  }

  proceedRegister(_data: RegisterInfo): Observable<any> {
    return this.http.post<any>(this.apiUrl + 'account/register', _data);
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
