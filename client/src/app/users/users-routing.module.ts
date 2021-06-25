import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {MyAccountComponent} from './my-account/my-account.component';
// import { BookedticketComponent } from './userdashboard/bookedticket/bookedticket.component';
// import { TermsofservicesComponent } from './userdashboard/termsofservices/termsofservices.component';
// import {UserdashboardComponent} from './userdashboard/userdashboard.component'
const routes: Routes = [
  {path:' ', component:RegisterComponent},
  {path:'login', component:LoginComponent},
  {path:'my-account', component:MyAccountComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
