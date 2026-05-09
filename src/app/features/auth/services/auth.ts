import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'app/environment';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject, catchError, tap, throwError } from 'rxjs';
import { RegisterRequest } from '../components/register/register';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn =new BehaviorSubject<boolean>(false);

  isLoggedIn$ = this.loggedIn.asObservable();

  constructor(private http: HttpClient) {
      this.loggedIn.next(!!localStorage.getItem('token'));
  }

  register(user: RegisterRequest) {
  return this.http.post<any>(
    `${environment.apiGateway}/auth/register`, user
  ).pipe(
    tap(res => console.log('Registered:', res)),
    catchError(err => {
      let errorMessage = err?.error?.message || err?.error || 'Registration failed';
      return throwError(() => errorMessage);
    })
  );
}

  login(credentials: { username: string; password: string }) {
    return this.http.post<any>(
      `${environment.apiGateway}/auth/login`,
      credentials
    ).pipe(
      tap(res => {
        const decoded: any = jwtDecode(res.token);
        const userId = decoded.userId;
        const userName = decoded.sub;

        localStorage.setItem('token', res.token);
        localStorage.setItem('userId', userId);
        localStorage.setItem('userName' ,userName);

        this.loggedIn.next(true);
      })
    );
  }

  logout(): void {
    localStorage.clear();
    this.loggedIn.next(false);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}
