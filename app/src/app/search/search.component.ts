import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  color ='';

  constructor(private activatedRoute:ActivatedRoute) { 
  
    this.activatedRoute.queryParams.subscribe((params)=>{
    // console.log(params['color']
    this.color = params['color'];
    })
  }

  ngOnInit(): void {
  }

}
