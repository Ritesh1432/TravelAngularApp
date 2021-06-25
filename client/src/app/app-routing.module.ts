import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BookticketComponent } from './bookticket/bookticket.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './users/login/login.component';
import { RegisterComponent } from './users/register/register.component';
import {TermsOfServicesComponent} from './terms-of-services/terms-of-services.component';
import { HotelsComponent } from './bookticket/hotels/hotels.component';
import {FlightTicketComponent} from './bookticket/flights/flight-ticket/flight-ticket.component';
import { HotelTicketComponent } from './bookticket/hotels/hotel-ticket/hotel-ticket.component';
import {MyAccountComponent} from './users/my-account/my-account.component';

const routes: Routes = [
  {path:'users', component:RegisterComponent},
  {path:'home', component:HomeComponent},
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginComponent},
  {path:'my-account', component:MyAccountComponent},
  {path:'about', component:AboutComponent},
  {path:'contactus', component:ContactusComponent},
  {path:'bookticket/flights', component:BookticketComponent},
  {path:'terms-of-services', component:TermsOfServicesComponent},
  {path:'bookticket/hotels',component:HotelsComponent},
  {path:'book/flight-ticket',component:FlightTicketComponent},
  {path:'book/hotel-ticket', component:HotelTicketComponent},
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'flights', redirectTo:'/bookticket/flights', pathMatch:'full'},
  {path:'hotels', redirectTo:'/bookticket', pathMatch:'full'}
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
