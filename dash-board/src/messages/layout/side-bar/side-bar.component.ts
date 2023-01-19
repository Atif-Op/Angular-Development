import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  title="Message"

  main=[
  {
    'name':'Inbox',
    'icon' :'inbox',
    'routing':'message/inbox'
  },
  {
    'name':'Sent',
    'icon' :'call_made',
    'routing':'/message/sent'
  },
  {
    'name':'Drafts',
    'icon' :'drafts',
    'routing':'/message/drafts'
  },
  {
    'name':'Spam',
    'icon' :'block',
    'routing':'/message/spam'
  },
  {
    'name':'Trash',
    'icon' :'restore_from_trash',
    'routing':'/message/trash'
  },
  {
    'name':'Archive',
    'icon' :'archive',
    'routing':'/message/archive'
  },
]

filters=[
  {
      'name':'Starred',
      'icon' :'stars'
    },
    {
      'name':'Important',
      'icon' :'label'
    },
]

labels=[
  {
      'name':'Paypal',
      'icon' :'label',
      'css':'#0060ca'
    },
    {
      'name':'Upworks',
      'icon' :'label',
      'css':'#f44336'
    },
    {
      'name':'In-House',
      'icon' :'label',
      'css':'#17a2b8'
    },
    {
      'name':'Clients',
      'icon' :'label',
      'css':'#28a745'
    },
]
}
