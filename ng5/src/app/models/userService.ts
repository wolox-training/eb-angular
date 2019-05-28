import { User } from './user'; 
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

export class UserService {
  
  userBaseEndpoint: string = environment.WBOOK_SERVICE + '/api/v1/users';

  createUser(user: User, http:HttpClient) {
     return http.post<any>(this.userBaseEndpoint, {user});
  }
}
 