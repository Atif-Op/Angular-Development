import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { MessageService } from 'src/message-app/services/message.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  searchText: string = "";
  constructor(private msgService: MessageService) {
  }


  ngOnInit(): void {
    this.msgService.myMethod(this.searchText);
    console.log("sent",this.searchText)
  }
}



