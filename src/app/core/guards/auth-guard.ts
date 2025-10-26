import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { AuthService } from '@features/auth/services/auth';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): Observable<boolean | UrlTree> {
    return this.authService.isLoggedIn$.pipe(
      map(isLoggedIn => {
        if (isLoggedIn) {
          return true;
        } else {
          return this.router.createUrlTree(['/home']);
        }
      })
    );
  }
}
