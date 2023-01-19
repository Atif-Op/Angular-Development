import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {
  //side-nav-bar items
  sideNavBarList = [
    {
      name: 'DashBoard',
      icon: 'dashboard',
      routing: 'dashboard',
    },
    {
      name: 'Widgets',
      icon: 'widgets',
      routing: 'widgets',
    },
    {
      name: 'Metrics',
      icon: 'equalizer',
    },
    {
      name: 'Layouts',
      icon: 'reorder',
    },
    {
      name: 'messages',
      icon: 'messages',
      routing: 'messages',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
