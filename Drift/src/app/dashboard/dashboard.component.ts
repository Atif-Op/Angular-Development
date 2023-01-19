import { Component, OnInit } from '@angular/core';
import  { Observable, reduce } from 'rxjs';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { 
  
  }
  ngOnInit(): void {
    
  }
//row1
progress_card=[{
  name:"Listed property",
  Count:"26,707",
  width:25,
  ariavaluenow:25,
  percentage:"0.3%",
  content:"this week",
  color:"progress-bar-striped",
  css:"card_1"
},
{
   name:"Serving cities",
  Count:"384",
  width:50,
  ariavaluenow:25,
  content:"7 new cities this week",
  color:" progress-bar-striped bg-warning",
  css:"card_1"
},
{
name:"Online Visitor",
  Count:"84,729",
  width:75,
  ariavaluenow:25,
  content:"AVG .327 visit daily",
  color:"progress-bar-striped bg-success",
  css:"card_1"
},
{
name:"Online Queries",
  Count:"87,239",
  width:100,
  ariavaluenow:25,
  percentage:"38%",
  content:"past month",
  color:" progress-bar-striped bg-danger",
  css:"card_1"
}]

//row2 
content_card=[{
name:"Your Current Plan",
price:19,
color:"#512da8",
css:"card_2",
},
// {
// name:"Modern home",
// content:"Structure sales Pvt. Ltd is boston’s reputed government construction company since 2011.",
// extra:"Read More",
// color:"white",
// css:"card_2"
// },
// {
//   name:"Modern home",
//   content:"Structure sales Pvt. Ltd is boston’s reputed government construction company since 2011.",
//   extra:"Read More",
//   color:"white",
//   css:"card_2"
//   }
]



//row3 images
// image=[
//   {
//   name:"atif",
//   img:"assets/logo.png"
// },
// {
// name:"aniket",
// img:"assets/logo.png"
// }
// ,
// {
//   name:"vishal",
//   img:"assets/logo.png"

// }
// ,
// {
//   name:"rakesh",
//   img:"assets/logo.png"
// }
// ]


// {
//    name:"Serving cities",
//   Count:384
// },
// {
// name:"Online Visitor",
//   Count:84729
// },
// {
// name:"Online Queries",
//   Count:87239
 

// type=[
// "success","info","warning","danger"
// ]



//row4 properties

properties=["All","Popular","New Jersey","Colorado","Albama","test"]

            

// newdata:any;
// myobservable=new Observable((sub)=>{
//   sub.next(this.Data);
// }
// )

// prop(){
//   if(label="Property & sidebar agent")
//   this.myobservable.subscribe(data=>{
//     this.newdata=data;
//   });
//}





}
