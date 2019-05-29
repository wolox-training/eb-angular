import { User } from './user'; 
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Session } from './session';
import { LocalStorageService } from './local-storage.service';

export class UserService {
  userBaseEndpoint: string = environment.WBOOK_SERVICE + '/api/v1/users';

  createUser(user: User, http:HttpClient) {
    return http.post<any>(this.userBaseEndpoint, {user});
  }

  login(session: Session, http:HttpClient) {
    return http.post<any>(this.userBaseEndpoint + '/sessions', {session});
  }

  loggedIn() {
    return !!localStorage.getItem('auth');
  }
}
