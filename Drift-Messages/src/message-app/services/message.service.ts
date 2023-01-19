import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MessageService {
  myObs = new Subject();

  constructor() {

  }

  myMethod(data: string) {
   this.myObs.next(data);
  }




}







