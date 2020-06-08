import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoldComponent } from './gold/gold.component';
import { GoldSanctionComponent } from './gold/gold-sanction/gold-sanction.component';
import { TermComponent } from './term/term.component';
import { TermSanctionComponent } from './term/term-sanction/term-sanction.component';
import { TermTransactionComponent } from './term/term-transaction/term-transaction.component';
import { LadApplicationComponent } from './lad/lad-application/lad-application.component';
import { LadSanctionComponent } from './lad/lad-sanction/lad-sanction.component';
import { LadTransactionComponent } from './lad/lad-transaction/lad-transaction.component';
import { SummaryComponent } from './summary/summary.component';



const routes: Routes = [
  { path: 'gold-loan', component: GoldComponent },
  { path: 'gold-loan-sanction', component: GoldSanctionComponent },
  { path: 'gold-loan-transaction', component: GoldSanctionComponent },
  { path: 'term-loan', component: TermComponent },
  { path: 'term-loan-sanction', component: TermSanctionComponent },
  { path: 'term-loan-transaction', component: TermTransactionComponent },
  { path: 'lad-loan-application', component: LadApplicationComponent },
  { path: 'lad-loan-sanction', component: LadSanctionComponent },
  { path: 'lad-loan-transaction', component: LadTransactionComponent },
  { path: 'loan-summary/:id', component: SummaryComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoanRoutingModule { }
