import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './screens/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './models/userService';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
