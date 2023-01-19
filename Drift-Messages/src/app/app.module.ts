import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//angular material
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { MessageAppModule } from 'src/message-app/message-app.module';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    MessageAppModule,
    //angular material
    MatIconModule,
    MatListModule,
    AppRoutingModule,
    RouterModule
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
