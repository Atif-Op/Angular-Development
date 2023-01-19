import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dash-board';
  sideBarOpen=false;

  sideBarToggler(){
    this.sideBarOpen=!this.sideBarOpen;
  }
}
