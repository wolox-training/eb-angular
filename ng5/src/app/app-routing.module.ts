import { AuthGuard } from './authorization/auth/auth.guard';
import { UnauthComponent } from './screens/unauth/unauth.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from 'src/app/screens/unauth/screens/initial-form/screens/register/register.component';
import { LoginComponent } from 'src/app/screens/unauth/screens/initial-form/screens/login/login.component';
import { AuthComponent } from 'src/app/screens/auth/auth.component';
import { BookListComponent } from 'src/app/screens/auth/screens/book-list/book-list.component';
import { UnauthGuard } from './authorization/unauth/unauth.guard';
import { InitialFormComponent } from 'src/app/screens/unauth/screens/initial-form/initial-form.component';



const routes: Routes = [
  {
    path: '',
    component: UnauthComponent,
    canActivate: [UnauthGuard],
    children: [
      {
        path: '',
        component: InitialFormComponent,
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
      }
    ]
  },
  {
    path: 'books',
    component: AuthComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: BookListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
