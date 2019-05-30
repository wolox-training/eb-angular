import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from './../../models/userService';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private userServie: UserService,
    private router: Router
    ) {}

  canActivate(): boolean {
    if (this.userServie.loggedIn()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
