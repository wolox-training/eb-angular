import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { LocalStorageService } from '../../models/local-storage.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})

export class AuthComponent  {

  constructor(private storage: LocalStorageService, private router: Router) { }

  logOut() {
    this.storage.removeValue('auth');
    this.router.navigate(['']);
  }
}
