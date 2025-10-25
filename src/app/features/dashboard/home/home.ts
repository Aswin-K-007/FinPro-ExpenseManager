import { CommonModule} from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../auth/services/auth';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, 
    RouterLink
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements OnInit{
  isLoggedIn = false;

  constructor(private authService: AuthService){}
  
  ngOnInit(): void {
    this.authService.isLoggedIn$.subscribe({
      next: (status) => {
      this.isLoggedIn = status;
      }
    });
  }
}