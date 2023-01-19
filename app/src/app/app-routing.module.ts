import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MissedComponent } from './contact/missed/missed.component';
import { CallLogsComponent } from './contact/recieve/call-logs/call-logs.component';
import { RecieveComponent } from './contact/recieve/recieve.component';
import { AddLoanComponent } from './loan/loan-type/add-loan/add-loan.component';
import { EditLoanComponent } from './loan/loan-type/edit-loan/edit-loan.component';
import { LoanTypeComponent } from './loan/loan-type/loan-type.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { P1Component } from './product/p1/p1.component';
import { P2Component } from './product/p2/p2.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
{
  path:"missed",
  component:MissedComponent
}
,{
  path:"recieve",
  component:RecieveComponent,
  outlet:"router1"
},{
  path:'',
  redirectTo:"missed",
  pathMatch:'full'
},
{
  path:"search",
  component:SearchComponent
},
{ path: 'payment', loadChildren: () => import('./payment/payment.module').then(m => m.PaymentModule) },
{
  path:'**',
  component:PagenotfoundComponent
}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
