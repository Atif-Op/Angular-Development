import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  all=[{
    label:"Property & sidebar agent",
    location:"Sublevel, Hialeah, Florida",
    price:"$113,859 $6705/sqft",
    text:"Check in detail",
    color:"red"
    
   }]
}
