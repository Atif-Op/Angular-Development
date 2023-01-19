import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagesRoutingModule } from './messages-routing.module';
import { MessagesComponent } from './messages.component';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';
//angular material
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import { HeaderComponent } from './layout/header/header.component';
import { SideBarComponent } from './layout/side-bar/side-bar.component';
import { InboxComponent } from './layout/side-bar/main/inbox/inbox.component';
import { SentComponent } from './layout/side-bar/main/sent/sent.component';
import { DraftsComponent } from './layout/side-bar/main/drafts/drafts.component';


@NgModule({
  declarations: [
    MessagesComponent,
    LayoutComponent,
    HeaderComponent,
    SideBarComponent,
    InboxComponent,
    SentComponent,
    DraftsComponent
  ],
  imports: [
    CommonModule,
    MessagesRoutingModule,
    RouterModule,
    //angular material
    MatIconModule,
    MatListModule,
    MatMenuModule 
  ]
})
export class MessagesModule { }
