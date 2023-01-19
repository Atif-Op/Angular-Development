import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MissedComponent } from './missed/missed.component';
import { RecieveComponent } from './recieve/recieve.component';
import{CallLogsComponent} from './recieve/call-logs/call-logs.component';



@NgModule({
  declarations: [
    MissedComponent,
    RecieveComponent,
    CallLogsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MissedComponent,
    RecieveComponent,
 CallLogsComponent
  ]
})
export class ContactModule { }
