import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Session } from '../../models/session';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../../models/userService';
import { LocalStorageService } from '../../models/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../styles/container.scss']
})

export class LoginComponent {
  rForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private userService: UserService,
    private storage: LocalStorageService,
    private router: Router
  ) {
    this.rForm = fb.group({
      email: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])],
    });
  }

  get email() { return this.rForm.get('email'); }
  get password() { return this.rForm.get('password'); }

  login(post) {
    const session: Session = {email: post.email,
                            password: post.password,
                            };
    this.userService.login(session, this.http)
      .subscribe(res => {
        this.storage.setValue('auth', res.access_token);
        this.router.navigate(['/auth']);
      });
  }
}
