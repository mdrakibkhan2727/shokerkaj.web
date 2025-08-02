import { Component,OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth/auth.service';
import { JwtPayload } from '../../../core/models/auth/jwt-payload';
import {jwtDecode} from 'jwt-decode';
import { LoginInfo } from '../../../core/models/auth/login';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  error: string = '';

  constructor(
    private builder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.builder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      const loginInfo: LoginInfo = {
        username: this.loginForm.value.username,
        password: this.loginForm.value.password
      };

      this.authService.proceedLogin(loginInfo).subscribe({
        next: (res: any) => {
          const token = res.token;
          localStorage.setItem('token', token);

          const payload = jwtDecode<JwtPayload>(token);
          const roles =  payload.role;

          if (roles.includes('superadmin')) this.router.navigate(['/newbusinessman/blog-post']);
          else if (roles.includes('businessman')) this.router.navigate(['/admin/dashboard']);
          else if (roles.includes('newbusinessman')) this.router.navigate(['/newbusinessman/dashboard']);
          else if (roles.includes('teacher')) this.router.navigate(['/businessman/profile-playlist']);
          else this.router.navigate(['/unauthorized']);
        },
        error: (err) => {
          this.error = err.error?.message || 'Login failed';
        }
      });
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
