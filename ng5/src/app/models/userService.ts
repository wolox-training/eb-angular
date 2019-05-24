import { User } from './user'; 
import { HttpClient } from '@angular/common/http';

export class UserService {
  readonly URL_SERVICE = 'https://wbooks-api-stage.herokuapp.com';

  constructor(){
  }

  createUser(user: User, http:HttpClient) {
    http.post<any>(this.URL_SERVICE + '/api/v1/users', {user}).toPromise()
      .then(res => {
        console.log('succes')
      })
      .catch(err => {
        console.log(err)
      });
  }
}
