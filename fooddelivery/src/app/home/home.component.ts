import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodserviceService } from '../service/food/foodservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  img:string[]=[];
  constructor( private fs:FoodserviceService,private activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.img=this.fs.images;
    this.activateRoute.data.subscribe((i=>console.log(i)))
  }

}
