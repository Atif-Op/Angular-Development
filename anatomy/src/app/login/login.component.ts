import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

 

 @Output()
 child=new EventEmitter<string>();
 ngOnInit(): void {
this.child.emit("hello form child..")
 }

 




}
