import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ContactModule} from './contact/contact.module';
import { FormsModule } from '@angular/forms';
import { ObservableComponent } from './observable/observable.component';
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common'; 
import {LoanModule} from './loan/loan.module';
import { ProductComponent } from './product/product.component';
import { P1Component } from './product/p1/p1.component';
import { P2Component } from './product/p2/p2.component';
import { Observable1Component } from './observable1/observable1.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SearchComponent } from './search/search.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { TakeoperatorComponent } from './takeoperator/takeoperator.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ObservableComponent,
    ProductComponent,
    P1Component,
    P2Component,
    Observable1Component,
    SearchComponent,
    PagenotfoundComponent,
    TakeoperatorComponent,
    HomeComponent,


  
  ],
  imports: [
    BrowserModule,
    ContactModule,
    FormsModule,
    AppRoutingModule,
    LoanModule,
    MatSlideToggleModule,



  ],
  providers: [
    {
      provide:LocationStrategy,useClass:PathLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
