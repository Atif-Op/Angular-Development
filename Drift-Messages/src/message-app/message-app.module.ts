import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { SideBarComponent } from './layout/side-bar/side-bar.component';
import { InboxComponent } from './layout/side-bar/main/inbox/inbox.component';
import { SentComponent } from './layout/side-bar/main/sent/sent.component';
import { DraftsComponent } from './layout/side-bar/main/drafts/drafts.component';
import { SpamComponent } from './layout/side-bar/main/spam/spam.component';
import { TrashComponent } from './layout/side-bar/main/trash/trash.component';
import { ArchiveComponent } from './layout/side-bar/main/archive/archive.component';
import { RouterModule } from '@angular/router';
//angular material
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    SideBarComponent,
    SentComponent,
    DraftsComponent,
    SpamComponent,
    TrashComponent,
    ArchiveComponent,
    InboxComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
        //angular material
    MatIconModule,
    MatListModule,
    MatMenuModule

  ],

})
export class MessageAppModule { }
