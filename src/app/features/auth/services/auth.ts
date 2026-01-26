import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'app/environment';
import { BehaviorSubject, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn =new BehaviorSubject<boolean>(false);

  isLoggedIn$ = this.loggedIn.asObservable();

  constructor(private http: HttpClient) {
      this.loggedIn.next(!!localStorage.getItem('token'));
  }

  login(credentials: { username: string; password: string }) {
    return this.http.post<any>(
      `${environment.authApi}/login`,
      credentials
    ).pipe(
      tap(res => {
        localStorage.setItem('token', res.token);
        localStorage.setItem('user', JSON.stringify(res));
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
