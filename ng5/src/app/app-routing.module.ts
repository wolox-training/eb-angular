import { UnauthComponent } from './screens/unauth/unauth.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from 'src/app/screens/unauth/register/register.component';
import { LoginComponent } from 'src/app/screens/unauth/login/login.component';
import { AuthComponent } from 'src/app/screens/auth/auth.component';

const routes: Routes = [
  {
    path: '',
    component: UnauthComponent,
    children: [
      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'sign-up',
        component: RegisterComponent
      }
    ]
  },
  {
    path: 'books',
    component: AuthComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
