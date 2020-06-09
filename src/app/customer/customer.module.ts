import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { ApplicationComponent } from './application/application.component';
import { MaterialModule } from '../shared/material.module';


@NgModule({
  declarations: [ApplicationComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    MaterialModule
  ]
})
export class CustomerModule { }
