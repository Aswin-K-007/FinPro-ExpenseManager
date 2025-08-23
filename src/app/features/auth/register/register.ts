import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [FormsModule,CommonModule],
  templateUrl: './register.html',
  styleUrl: './register.scss'
})
export class RegisterComponent {
  user = {
    firstName: '',
    lastName: '',
    email: '',
    contactNo: '',
    password: '',
    confirmPassword: ''
  };

  onSubmit(){
    if (this.user.password !== this.user.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("User registered:", this.user);
    alert("Registration Successful!");
  }
}
