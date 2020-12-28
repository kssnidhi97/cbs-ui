import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { MaterialModule } from '../shared/material.module';
import { HttpService } from '../shared/http.service';
import { SessionService } from '../shared/session.service';
import { LoginService } from './login.service';
import { AuthGuard } from '../auth.guard';
import { AccountService } from '../account/account.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    LoginRoutingModule,
    MaterialModule
  ],
  providers: [HttpService, SessionService, LoginService, AuthGuard, AccountService]
})
export class LoginModule { }
