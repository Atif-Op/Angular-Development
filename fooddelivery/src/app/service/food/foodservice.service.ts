import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodserviceService {

  constructor() { }
   images:string[] = [
    'assets/images (1).jpg',
    'assets/images (2).jpg',
    'assets/images (3).jpg',
    'assets/images (4).jpg',
    'assets/images (5).jpg',
    'assets/images (6).jpg'
  ];
 

//  getAll!:{
//   return:[
//     'assets/images (1).jpg',
//     'assets/images (2).jpg',
//     'assets/images (3).jpg',
//     'assets/images (4).jpg',
//     'assets/images (5).jpg',
//     'assets/images (6).jpg'
//   ]
//  }
}
