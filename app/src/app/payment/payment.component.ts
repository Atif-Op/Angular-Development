import { Component, OnInit } from '@angular/core';
import { filter, interval } from 'rxjs';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const num=interval(1000);
    num.pipe(filter(i=>{return i%2==0})).subscribe((i=>{console.log(i)}))
    }
  }


