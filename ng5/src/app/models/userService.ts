import { User } from './user'; 
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

export class UserService {
  
  userBaseEndpoint: string = environment.WBOOK_SERVICE + '/api/v1/users';

  createUser(user: User, http:HttpClient) {
    http.post<any>(this.userBaseEndpoint, {user})
      .subscribe(res => {
        console.log('201: Succes');
      })
  }
}
 