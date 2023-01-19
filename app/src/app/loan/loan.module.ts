import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoanTypeComponent } from './loan-type/loan-type.component';
import { AddLoanComponent } from './loan-type/add-loan/add-loan.component';
import { EditLoanComponent } from './loan-type/edit-loan/edit-loan.component';





@NgModule({
  declarations: [
  
  
    LoanTypeComponent,
          AddLoanComponent,
          EditLoanComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
     LoanTypeComponent 


  ]
})
export class LoanModule { }
