import { CommonModule } from '@angular/common';
import { compileComponentFromMetadata } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule,CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  user ={
    username:'',
    password:''
  }

  loginUser(){
    if(this.user.username !== 'aswin' && this.user.password !== 'password'){
      console.log("Invalid Username or Password",this.user);
      alert("Invalid Username or Password");
    }
    else{
      console.log("Login Successful..",this.user);
      alert("Login Successful..");
    }
  }
}
