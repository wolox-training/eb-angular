import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../../../../../models/user';
import { UserService } from '../../../../../../models/userService';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent {

  rForm: FormGroup;
  RequiredErrorAlert = 'This field is required';
  EmailErrorAlert = 'This is not an Email';
  PassErrorAlert = 'Password should be at least 6 characters.';
  user: User;

  constructor(
    private fb: FormBuilder,
    private userService: UserService
  ) {
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
    this.user = {email: post.email,
                first_name: post.firstName,
                last_name: post.lastName,
                locale: 'en',
                password: post.password,
                password_confirmation: post.password
                };
    this.userService.createUser(this.user)
      .subscribe(res => {
        console.log('201: Succes');
      });
  }
}
