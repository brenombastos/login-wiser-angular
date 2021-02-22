import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { Routing } from './app.routing';
import { AuthService } from './login/auth.service';
import { FormsModule } from '@angular/forms';
import { LoginOkComponent } from './login-ok/login-ok.component';
import { LoginFailComponent } from './login-fail/login-fail.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginOkComponent,
    LoginFailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Routing,
    FormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
