import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepositComponent } from './deposit.component';
import { DepositApprovalComponent } from './deposit-approval/deposit-approval.component';
import { DepositRefundComponent } from './deposit-refund/deposit-refund.component';
import { PartialRefundComponent } from './partial-refund/partial-refund.component';
import { PigmyAgentComponent } from './pigmy-agent/pigmy-agent.component';
import { PigmyIntegrationComponent } from './pigmy-integration/pigmy-integration.component';
import { PigmyTransactionComponent } from './pigmy-transaction/pigmy-transaction.component';
import { CalculatorComponent } from './calculator/calculator.component';


const routes: Routes = [
  { path: 'deposit-page', component: DepositComponent },
  { path: 'interest-calculator', component: CalculatorComponent },
  { path: 'deposit-page/approval', component: DepositApprovalComponent },
  { path: 'deposit-page/refund', component: DepositRefundComponent },
  { path: 'deposit-page/fd-partial-refund', component: PartialRefundComponent },
  { path: 'deposit-page/pigmy-create', component: PigmyAgentComponent },
  { path: 'deposit-page/pigmy-integration', component: PigmyIntegrationComponent },
  { path: 'pigmy-transaction', component: PigmyTransactionComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepositRoutingModule { }
