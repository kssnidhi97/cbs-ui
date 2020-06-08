import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoanRoutingModule } from './loan-routing.module';
import { GoldComponent } from './gold/gold.component';
import { LadApplicationComponent } from './lad/lad-application/lad-application.component';
import { LadSanctionComponent } from './lad/lad-sanction/lad-sanction.component';
import { LadTransactionComponent } from './lad/lad-transaction/lad-transaction.component';
import { TermComponent } from './term/term.component';
import { SummaryComponent } from './summary/summary.component';
import { GoldSanctionComponent } from './gold/gold-sanction/gold-sanction.component';
import { GoldTransactionComponent } from './gold/gold-transaction/gold-transaction.component';
import { TermTransactionComponent } from './term/term-transaction/term-transaction.component';
import { TermSanctionComponent } from './term/term-sanction/term-sanction.component';


@NgModule({
  declarations: [GoldComponent, LadApplicationComponent, LadSanctionComponent, LadTransactionComponent, TermComponent, SummaryComponent, GoldSanctionComponent, GoldTransactionComponent, TermTransactionComponent, TermSanctionComponent],
  imports: [
    CommonModule,
    LoanRoutingModule
  ]
})
export class LoanModule { }
