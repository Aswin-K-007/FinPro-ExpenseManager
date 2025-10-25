import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone:true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login.html',
  styleUrls: ['../auth-styles.scss']
})
export class Login {
  user ={
    username:'',
    password:''
  }
  
  constructor(private authService: AuthService, private router: Router){}

  loginUser(){
    if(this.user.username !== 'aswin' && this.user.password !== 'password'){
      console.log("Invalid Username or Password",this.user);
      alert("Invalid Username or Password");
    }
    else{
      this.authService.login();
      console.log("Login Successful..",this.user);
      this.router.navigate(['/home']);
    }
  }

  logoutUser() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
