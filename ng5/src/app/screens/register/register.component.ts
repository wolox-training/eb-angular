import { Component, OnInit } from '@angular/core';
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
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';
  titleAlert: String = 'This field is required';
  subTitle: String = 'BOOKS';
  userService: UserService;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.rForm = fb.group({
      'firstName': [null, Validators.required],
      'lastName': [null, Validators.required],
      'email': [null, Validators.compose([Validators.required, Validators.email])],
      'password': [null, Validators.required],
    });
  }

  register(post) {
    this.firstName = post.firstName;
    this.lastName = post.lastName;
    this.email = post.email;
    this.password = post.password;
    let user: User;
    user = {email: this.email, 
            first_name: this.firstName, 
            last_name: this.lastName,
            locale: 'en',
            password: this.password,
            password_confirmation: this.password
          }
    this.userService = new UserService();
    this.userService.createUser(user, this.http);
  }
}
