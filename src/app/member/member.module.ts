import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberRoutingModule } from './member-routing.module';
import { AdditionalShareComponent } from './additional-share/additional-share.component';
import { ApplicationComponent } from './application/application.component';
import { ApprovalComponent } from './approval/approval.component';
import { BoardMeetingComponent } from './board-meeting/board-meeting.component';
import { DividendIssueComponent } from './dividend-issue/dividend-issue.component';
import { DividendPaymentComponent } from './dividend-payment/dividend-payment.component';
import { FeeComponent } from './fee/fee.component';
import { RefundShareComponent } from './refund-share/refund-share.component';


@NgModule({
  declarations: [AdditionalShareComponent, ApplicationComponent, ApprovalComponent, BoardMeetingComponent, DividendIssueComponent, DividendPaymentComponent, FeeComponent, RefundShareComponent],
  imports: [
    CommonModule,
    MemberRoutingModule
  ]
})
export class MemberModule { }
