import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { DashboardComponent } from './navbar-component/dashboard/dashboard.component';
import { WidgetsComponent } from './navbar-component/widgets/widgets.component';

const routes: Routes = [
  {path:"",redirectTo:'',pathMatch:'full'},
  {path:"dashboard",component:DashboardComponent},
  {path:"widgets",component:WidgetsComponent},
  { path: 'messages', loadChildren: () => import('../messages/messages.module').then(m => m.MessagesModule) },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
