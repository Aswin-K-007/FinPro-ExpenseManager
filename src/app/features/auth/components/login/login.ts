import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '@auth/services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone:true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login.html',
  styleUrls: ['../../styles/auth-styles.scss']
})
export class Login {
  loginCredentials = {
    username:'',
    password:''
  }

  errorMsg =''
  isLoading=false;
  
  constructor(private authService: AuthService, private router: Router){}

  loginUser(){
  this.isLoading = true;
  this.authService.login(this.loginCredentials).subscribe({
    next: () => {
      setTimeout(() => {
      this.isLoading = false;
      this.router.navigate(['/home']);
    }, 500);},
    error: err => { 
      this.isLoading = false; 
      this.errorMsg = err.error.message || 'Login failed';
    }
  });
  }

  logoutUser() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  onInputChange() {
    this.errorMsg = '';
  }
}
