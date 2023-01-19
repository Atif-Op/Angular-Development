import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';


@Component({
  selector: 'app-observable1',
  templateUrl: './observable1.component.html',
  styleUrls: ['./observable1.component.css']
})
export class Observable1Component implements OnInit {
  timerSubscription !: Subscription;

  timerBrowserSubscription!: Subscription;

  timers: number[] = [];

  constructor() {}



  ngOnInit(): void {

    const newObservable1 = new Observable <number>((observer) => {

      let i = 0;

     let intervel = setInterval(() => {

        console.log('Interval executing');

        observer.next(i++);

       }, 1000);  



       return () => {

        console.log('called when unsub');

        clearInterval(intervel);

       };

  });



  this.timerSubscription = newObservable1.subscribe((data) => {

    console.log(new Date().toLocaleTimeString() + ' ' + data);

    });



   this.timerBrowserSubscription = newObservable1. subscribe ((data) => {

     this.timers.push(data);

     });



}



cancelTimers(){

  console.log('cancel the observable');

  this.timerSubscription.unsubscribe();

  this.timerBrowserSubscription.unsubscribe();
 

}
}
