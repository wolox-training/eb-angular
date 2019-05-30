import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../models/user';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../../models/userService';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../container.scss']
})

export class RegisterComponent {

  rForm: FormGroup;
  RequiredErrorAlert = 'This field is required';
  EmailErrorAlert = 'This is not an Email';
  PassErrorAlert = 'Password should be at least 6 characters.';

  constructor(private fb: FormBuilder, private http: HttpClient, private userService: UserService) {
    this.rForm = fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
    });
  }

  get firstName() { return this.rForm.get('firstName'); }
  get lastName() { return this.rForm.get('lastName'); }
  get email() { return this.rForm.get('email'); }
  get password() { return this.rForm.get('password'); }

  register(post) {
    const user: User = {email: post.email,
                        first_name: post.firstName,
                        last_name: post.lastName,
                        locale: 'en',
                        password: post.password,
                        password_confirmation: post.password
                        };
    this.userService.createUser(user, this.http)
      .subscribe(res => {
        console.log('201: Succes');
      });
  }
}
