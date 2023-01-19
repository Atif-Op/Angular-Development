import { Component, OnInit } from '@angular/core';
import {interval, Observable, Subscription} from 'rxjs'

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {
  timerSubscription !: Subscription;
  constructor() {}
  ngOnInit(): void {
    // const newObservable  =new ObservableComponent <number>((observable) => {
    //   for(let i=0 ; i<=5; i++){
    //     observable.next(i);
    //   }
    //   observable.complete();
    // }
    // );

    // let observable ={

    //   next: (data:number) =>  console.log(data),

    //   error: (error: string) => console.log(error),

    //   complete: () =>  console.log('completed the sub'),

    // };

    //   observable.subscribe({

    //     next: (data: number) => {
    //       console.log(data)
    //     },
    //     error: (error: string) => {
    //        console.log(error)
    //       },

    //     complete: () => {
    //        console.log('completed the sub')
    //     }
    //   })

    // }
    const newObservable = interval(1000);
    this.timerSubscription =newObservable.subscribe((data) => {
    console.log(new Date().toLocaleTimeString() + ' '+data);

    });

  }

    cancelTimer(){

      console.log('cancel the observable');

      this.timerSubscription.unsubscribe();

    }

  }