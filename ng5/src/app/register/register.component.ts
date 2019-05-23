import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from './user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  rForm: FormGroup;
  post: any;
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';
  titleAlert: String = 'This field is required';

  constructor(private fb: FormBuilder) {
    this.rForm = fb.group({
      'firstName': [null, Validators.required],
      'lastName': [null, Validators.required],
      'email': [null, Validators.compose([Validators.required, Validators.email])],
      'password': [null, Validators.required],
    })
  }

  ngOnInit() {
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
  
    console.log({user});
  }
}

