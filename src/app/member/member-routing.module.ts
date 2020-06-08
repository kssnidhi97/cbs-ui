import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplicationComponent } from '../member/application/application.component';
import { AdditionalShareComponent } from './additional-share/additional-share.component';
import { FeeComponent } from './fee/fee.component';
import { RefundShareComponent } from './refund-share/refund-share.component';
import { DividendIssueComponent } from './dividend-issue/dividend-issue.component';
import { DividendPaymentComponent } from './dividend-payment/dividend-payment.component';
import { BoardMeetingComponent } from './board-meeting/board-meeting.component';
import { ApprovalComponent } from './approval/approval.component';


const routes: Routes = [
  { path: 'member-application', component: ApplicationComponent },
  { path: 'member-approval', component: ApprovalComponent },
  { path: 'member-fee', component: FeeComponent },
  { path: 'add-share', component: AdditionalShareComponent },
  { path: 'share-refund', component: RefundShareComponent },
  { path: 'divident-issue', component: DividendIssueComponent },
  { path: 'divident-payment', component: DividendPaymentComponent },
  { path: 'board-meeting', component: BoardMeetingComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberRoutingModule { }
