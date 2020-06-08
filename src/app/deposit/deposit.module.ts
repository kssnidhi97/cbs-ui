import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepositRoutingModule } from './deposit-routing.module';
import { CalculatorComponent } from './calculator/calculator.component';
import { DepositApprovalComponent } from './deposit-approval/deposit-approval.component';
import { DepositRefundComponent } from './deposit-refund/deposit-refund.component';
import { PartialRefundComponent } from './partial-refund/partial-refund.component';
import { PigmyAgentComponent } from './pigmy-agent/pigmy-agent.component';
import { PigmyIntegrationComponent } from './pigmy-integration/pigmy-integration.component';
import { PigmyTransactionComponent } from './pigmy-transaction/pigmy-transaction.component';
import { TransactionPreviewComponent } from './transaction-preview/transaction-preview.component';
import { DepositComponent } from './deposit.component';


@NgModule({
  declarations: [CalculatorComponent, DepositApprovalComponent, DepositRefundComponent, PartialRefundComponent, PigmyAgentComponent, PigmyIntegrationComponent, PigmyTransactionComponent, TransactionPreviewComponent, DepositComponent],
  imports: [
    CommonModule,
    DepositRoutingModule
  ]
})
export class DepositModule { }
