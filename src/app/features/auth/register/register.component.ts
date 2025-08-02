import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth/auth.service';
import { RegisterInfo } from '../../../core/models/auth/register';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-register',
  imports: [CommonModule,ReactiveFormsModule,RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(
    private builder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    // Initialize the login form with validators for username and password
    this.registerForm = this.builder.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      emailAddress: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['']  // optional, defaults to 'User' if left empty
    });
  }

  onRegister() {
    // Check if the form is valid
    if (this.registerForm.valid) {
      const registerInfo: RegisterInfo = {
        username: this.registerForm.value.username,
        emailAddress: this.registerForm.value.emailAddress,
        password: this.registerForm.value.password,
        role: this.registerForm.value.role
      };

      // Call the login API service
      this.authService.proceedRegister(registerInfo).subscribe({
        next: (item: any) => {
          alert('User Register successfully');
          this.router.navigate(['/login']);
        },
        error: (err) => {
          alert('Register failed: ' + (err.error?.message || 'Unknown error'));
        }
      });

    } else {
      // Trigger form validation errors if the form is invalid
      this.registerForm.markAllAsTouched();
    }
  }
}
