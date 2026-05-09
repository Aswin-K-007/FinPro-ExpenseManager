import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@features/auth/services/auth';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './register.html',
  styleUrls: ['../../styles/auth-styles.scss']
})
export class Register {

  errorMsg = '';

  request: RegisterRequest = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    mobileNo: ''
  };

  constructor(private authService: AuthService, private router: Router) {}

  registerUser() {

    if (this.request.password !== this.request.confirmPassword) {
      this.errorMsg = "Passwords do not match";
      return;
    }

    const payload = {
      firstName: this.request.firstName,
      lastName: this.request.lastName,
      email: this.request.email,
      password: this.request.password,
      mobileNo: this.request.mobileNo,
      confirmPassword:this.request.confirmPassword
    };

    this.authService.register(payload).subscribe({
      next: (res:any) => {
        Swal.fire({
          toast: true,
          position: 'top-end',
          icon: 'success',
          title: `Welcome, ${res.username}!`,
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          background: '#1e1e2f',
          customClass: {
            timerProgressBar: 'progress-bar'
          }
          }).then(() => {
            this.router.navigate(['/home']);
          });
      },
      error: (err) => {
        this.errorMsg = err || 'Registration failed';
      }
    });
  }
}

export interface RegisterRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  mobileNo: string;
}