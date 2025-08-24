import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone:true,
  imports: [FormsModule,CommonModule],
  templateUrl: './register.html',
  styleUrls: ['../auth-styles.scss']
})
export class Register {
  user = {
    firstName: '',
    lastName: '',
    email: '',
    contactNo: '',
    password: '',
    confirmPassword: ''
  };

  registerUser(){
    if (this.user.password !== this.user.confirmPassword) {
      console.log("Passwords do not match!",this.user.password,this.user.confirmPassword);
      alert("Passwords do not match!");
      return;
    }
    console.log("User registered:", this.user);
    alert("Registration Successful!");
  }
}
