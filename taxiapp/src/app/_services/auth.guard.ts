import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthenticationService,
    private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const url: string = state.url;
      return this.checkLogin(url);
  }



  checkLogin(url: string): boolean {
    if (this.authService.isLoggedIn === true || (localStorage.getItem('token')) != null) {
      return true;
    } else {
      // Store the attempted URL for redirecting
      this.authService.redirectUrl = url;
      this.router.navigate(['/login']);
    }
    return false;
  }
  
}
  
