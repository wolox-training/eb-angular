import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Session } from '../../models/session';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../../models/userService';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  
  rForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private userService: UserService) {
    this.rForm = fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.email])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(6)])],
    });
  }

  get email() { return this.rForm.get('email'); }
  get password() { return this.rForm.get('password'); }

  login(post) {
    let session: Session = {email: post.email, 
                            password: post.password, 
                            }
    this.userService.login(session, this.http)
      .subscribe(res => {
        console.log(res);
      });
  }
}
