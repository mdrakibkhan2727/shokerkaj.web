import { Component,OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth/auth.service';
@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  isAuthenticated = false;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    // Check if the token exists when the sidebar is initialized
    this.isAuthenticated = !!localStorage.getItem('token') || !!sessionStorage.getItem('token');
  }

  // Logout method that calls the AuthService
  logout() {
    this.authService.logout();
    this.isAuthenticated = false; // Update authentication status after logout
  }
}
