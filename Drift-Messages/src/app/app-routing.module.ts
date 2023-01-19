import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from 'src/message-app/layout/layout.component';
import { ArchiveComponent } from 'src/message-app/layout/side-bar/main/archive/archive.component';
import { DraftsComponent } from 'src/message-app/layout/side-bar/main/drafts/drafts.component';
import { InboxComponent } from 'src/message-app/layout/side-bar/main/inbox/inbox.component';
import { SentComponent } from 'src/message-app/layout/side-bar/main/sent/sent.component';
import { SpamComponent } from 'src/message-app/layout/side-bar/main/spam/spam.component';
import { TrashComponent } from 'src/message-app/layout/side-bar/main/trash/trash.component';



const routes: Routes = [

{path:"",component:LayoutComponent},
{path:"layout", component:LayoutComponent,
children:[
  {path:"inbox",component:InboxComponent},
  {path:"sent",component:SentComponent},
  {path:"drafts",component:DraftsComponent},
  {path:"spam",component:SpamComponent},
  {path:"trash",component:TrashComponent},
  {path:"archive",component:ArchiveComponent},
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
