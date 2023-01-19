import { Component, OnInit } from '@angular/core';
import { interval, take } from 'rxjs';

@Component({
  selector: 'app-takeoperator',
  templateUrl: './takeoperator.component.html',
  styleUrls: ['./takeoperator.component.css']
})
export class TakeoperatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    interval(500).pipe(take(5)).subscribe((data)=>{
      console.log(data); 
    },
    (error)=>{
      console.log(error);
    },
    ()=>{
      console.log('complete');
    }
    );
  
  }


}
