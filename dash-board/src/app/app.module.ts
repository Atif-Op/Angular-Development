import { NgModule } from '@angular/core';
import {BrowserModule } from '@angular/platform-browser';
import {CommonModule } from "@angular/common";
import {AppRoutingModule } from './app-routing.module';
import {AppComponent } from './app.component';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HeaderComponent } from './layout/header/header.component';
import {SideNavComponent } from './layout/side-nav/side-nav.component';

//Angular material module..
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';;
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {DashboardComponent } from './navbar-component/dashboard/dashboard.component';
import { FooterComponent } from './layout/footer/footer.component';
import {MatMenuModule} from '@angular/material/menu';
import { WidgetsComponent } from './navbar-component/widgets/widgets.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    DashboardComponent,
    FooterComponent,
    WidgetsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    
    //angular material
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatSelectModule,
    MatCardModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
