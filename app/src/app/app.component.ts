import { Component } from '@angular/core';
import{ActivatedRoute} from '@angular/router'
import{from, observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

user_object={
  'firstname':'atif',
  'lastname':'khan'
};
title="hello"

postData=[{title:"atif", role:"software developer"},
{title:"aniket", role:"software developer2"},
{title:"arbaz", role:"software developer3"}]

    postObservable$=from(this.postData);

    constructor(){
      this.postObservable$.subscribe({
       next:(data)=>console.log(data),
       error:(error)=>console.log(error),
       complete:()=>console.log("message sent successfully")
       
      });
      // constructor(private activatedRoute:ActivatedRoute){
      // this.activatedRoute.params.subscribe((params)=>
      // console.log(params))
      // }

    }
    text="change"
  }
{}