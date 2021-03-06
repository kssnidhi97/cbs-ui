import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { MaterialModule } from './shared/material.module';
import { ToastrModule } from 'ngx-toastr';
import { AuthGuard } from './auth.guard';
import { LoginService } from './login/login.service';
import { HttpService } from './shared/http.service';
import { SessionService } from './shared/session.service';
import { AccountService } from './account/account.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [AuthGuard, LoginService, HttpService, SessionService, AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
