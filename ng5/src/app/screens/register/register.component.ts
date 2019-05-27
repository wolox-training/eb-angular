import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../models/user';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../../models/userService';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  rForm: FormGroup;
  post: any;
  RequiredErrorAlert: String = 'This field is required';
  EmailErrorAlert: String = 'This is not an Email';
  PassErrorAlert: String = 'Password should be at least 6 characters.';
  userService: UserService;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.rForm = fb.group({
      'firstName': ['', Validators.required],
      'lastName': ['', Validators.required],
      'email': ['', Validators.compose([Validators.required, Validators.email])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(6)])],
    });
  }

  get firstName() { return this.rForm.get('firstName'); }
  get lastName() {return this.rForm.get('lastName')}
  get email() { return this.rForm.get('email'); }
  get password() { return this.rForm.get('password'); }

  register(post) {
    let user: User = {email: post.email, 
                      first_name: post.firstName, 
                      last_name: post.lastName,
                      locale: 'en',
                      password: post.password,
                      password_confirmation: post.password
                      }
    this.userService = new UserService();
    this.userService.createUser(user, this.http);
  }
}
