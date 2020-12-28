import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { HttpService } from '../shared/http.service';
import { SessionService } from '../shared/session.service';
import { AccountService } from './account.service';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AccountRoutingModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [HttpService, SessionService, AccountService,DatePipe]
})
export class AccountModule { }
