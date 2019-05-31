import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './screens/unauth/screens/initial-form/screens/register/register.component';
import { LoginComponent } from './screens/unauth/screens/initial-form/screens/login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserService } from './models/userService';
import { AuthComponent } from './screens/auth/auth.component';
import { LocalStorageService } from './models/local-storage.service';
import { BookListComponent } from './screens/auth/screens/book-list/book-list.component';
import { UnauthComponent } from './screens/unauth/unauth.component';
import { AuthGuard } from './authorization/auth/auth.guard';
import { UnauthGuard } from './authorization/unauth/unauth.guard';
import { InitialFormComponent } from './screens/unauth/screens/initial-form/initial-form.component';
import { TokenInterceptorService } from './authorization/token-interceptor/token-interceptor.service';
import { BookService } from './models/book.service';
import { BookDetailComponent } from '../app/screens/auth/screens/book-list/screens/book-detail/book-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    AuthComponent,
    BookListComponent,
    UnauthComponent,
    InitialFormComponent,
    BookDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    UserService,
    LocalStorageService,
    AuthGuard,
    UnauthGuard,
    BookService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
