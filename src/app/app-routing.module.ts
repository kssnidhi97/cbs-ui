import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';


const routes: Routes = [

  { path: '', redirectTo: 'cbs/login', pathMatch: 'full' },

  { path: 'cbs/login', component: LoginComponent },

  {
    path: 'cbs', component: LoginComponent,
    children: [
      { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) }
    ]
  },

  {
    path: 'cbs', component: MainLayoutComponent,
    children: [
      { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) }
    ]
  },

  {
    path: 'cbs', component: MainLayoutComponent,
    children: [
      { path: 'customer', loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule) }
    ]
  },

  {
    path: 'cbs', component: MainLayoutComponent,
    children: [
      { path: 'member', loadChildren: () => import('./member/member.module').then(m => m.MemberModule) }
    ]
  },

  {
    path: 'cbs', component: MainLayoutComponent,
    children: [
      { path: 'deposit', loadChildren: () => import('./deposit/deposit.module').then(m => m.DepositModule) }
    ]
  },

  {
    path: 'cbs', component: MainLayoutComponent,
    children: [
      { path: 'loan', loadChildren: () => import('./loan/loan.module').then(m => m.LoanModule) }
    ]
  },

  {
    path: 'cbs', component: MainLayoutComponent,
    children: [
      { path: 'transaction', loadChildren: () => import('./transaction/transaction.module').then(m => m.TransactionModule) }
    ]
  },

  {
    path: 'cbs', component: MainLayoutComponent,
    children: [
      { path: 'report', loadChildren: () => import('./reports/reports.module').then(m => m.ReportsModule) }
    ]
  },

  {
    path: 'cbs', component: MainLayoutComponent,
    children: [
      { path: 'master', loadChildren: () => import('./master/master.module').then(m => m.MasterModule) }
    ]
  },

  {
    path: 'cbs', component: MainLayoutComponent,
    children: [
      { path: 'log', loadChildren: () => import('./log/log.module').then(m => m.LogModule) }
    ]
  },

  {
    path: 'cbs', component: MainLayoutComponent,
    children: [
      { path: 'account', loadChildren: () => import('./account/account.module').then(m => m.AccountModule) }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
