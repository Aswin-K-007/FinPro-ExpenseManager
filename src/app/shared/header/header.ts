import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../features/auth/services/auth';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone:true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header implements OnInit{
  isLoggedIn = false;
  currentRoute: string = '';
  private hideOnRoutes = ['/home', '/profile'];
  dropdownOpen = false;

  constructor(private authService:AuthService, private router: Router){}

  ngOnInit(): void {
    this.authService.isLoggedIn$.subscribe({
      next: (status) => {
      this.isLoggedIn = status;
      },
      error: (err) => {
        console.error('Error checking login status:', err);
      },
    });

    this.router.events.subscribe(() => {
      this.currentRoute = this.router.url;
    });
  }

  logoutUser() {
    this.authService.logout();
    this.dropdownOpen = false;
  }

  showAuthButtons(): boolean {
   return !this.hideOnRoutes.some(route => this.currentRoute.includes(route));
  }

  showLoginButton():boolean {
    return !this.currentRoute.includes('/login');
  }

  showRegisterButton():boolean {
    return !this.currentRoute.includes('/register');
  }
  
  toggleDropdown(): void {
    this.dropdownOpen = !this.dropdownOpen;
  }
}
