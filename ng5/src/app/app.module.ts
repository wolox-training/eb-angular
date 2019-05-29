import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './screens/unauth/register/register.component';
import { LoginComponent } from './screens/unauth/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './models/userService';
import { AuthComponent } from './screens/auth/auth.component';
import { LocalStorageService } from './models/local-storage.service';
import { BookListComponent } from './screens/auth/book-list/book-list.component';
import { UnauthComponent } from './screens/unauth/unauth.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    AuthComponent,
    BookListComponent,
    UnauthComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    UserService,
    LocalStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
