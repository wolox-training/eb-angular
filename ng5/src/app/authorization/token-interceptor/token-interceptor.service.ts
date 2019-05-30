import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { UserService } from './../../models/userService';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }

  intercept(req, next) {
    const userService = this.injector.get(UserService);
    const tockenizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${userService.getToken()}`
      }
    });
    return next.handle(tockenizedReq);
  }
}
