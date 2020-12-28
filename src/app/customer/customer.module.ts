import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { ApplicationComponent } from './application/application.component';
import { MaterialModule } from '../shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from '../shared/http.service';
import { SessionService } from '../shared/session.service';
import { CustomerService } from './customer.service';
import { MemberService } from '../member/member.service';
import { AccountService } from '../account/account.service';


@NgModule({
  declarations: [ApplicationComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [HttpService, SessionService, CustomerService, MemberService, AccountService]
})
export class CustomerModule { }
