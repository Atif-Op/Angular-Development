import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AllComponent } from './dashboard/properties/all/all.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { WidgetsComponent } from './widgets/widgets.component';

const routes: Routes = [
  {path:"",redirectTo:'home',pathMatch:'full'},
  {path:"dashboard",component:DashboardComponent},
  {path:'header',component:HeaderComponent},
  {path:'home',component:HomeComponent},
  {path:"widgets",component:WidgetsComponent},
  {
    path:"Dashboard",
    outlet:"router1",
    children:[
      {
        path:"all",
        component:AllComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
