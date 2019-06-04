import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Session } from './session';
import { LocalStorageService } from './local-storage.service';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  userBaseEndpoint: string = environment.WBOOK_SERVICE + '/api/v1/users';

  constructor(
    private storage: LocalStorageService,
    private http: HttpClient
  ) {}

  createUser(user: User) {
    return this.http.post<any>(this.userBaseEndpoint, {user});
  }

  login(session: Session) {
    return this.http.post<any>(this.userBaseEndpoint + '/sessions', {session});
  }

  loggedIn() {
    return !! this.storage.getValue('auth');
  }

  getToken() {
    return this.storage.getValue('auth');
  }
}
