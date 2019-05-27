import { User } from './user'; 
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Session } from './session';

export class UserService {
  
  userBaseEndpoint: string = environment.WBOOK_SERVICE + '/api/v1/users';

  createUser(user: User, http:HttpClient) {
    http.post<any>(this.userBaseEndpoint, {user})
      .subscribe(res => {
        console.log('201: Succes');
      })
  }

  login(session: Session, http:HttpClient) {
    http.post<any>(this.userBaseEndpoint+'/sessions', {session})
      .subscribe(res => {
        console.log(res);
      })
  }
}
 