import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(public router: Router) {
  }

  canActivate(): boolean {
    const token = sessionStorage.getItem('token');
    if (token) {
      const tokenDecode = decode(token);
      if (Date.now() >= tokenDecode['exp'] * 1000) {
        this.router.navigate(['login']);
        return false;
      } else {
        return true;
      }
    } else {
      this.router.navigate(['login']);
      return false;
    }

  }

}
