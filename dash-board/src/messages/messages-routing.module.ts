import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DraftsComponent } from './layout/side-bar/main/drafts/drafts.component';
import { InboxComponent } from './layout/side-bar/main/inbox/inbox.component';
import { SentComponent } from './layout/side-bar/main/sent/sent.component';
import { MessagesComponent } from './messages.component';

const routes: Routes = [
  {
    path: '', component: MessagesComponent, children: [
      { path: 'inbox', component: InboxComponent },
    ]
  },

]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MessagesRoutingModule { }
