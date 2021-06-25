//In-Built imports
import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';

//Components imports
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import {MyAccountComponent} from './users/my-account/my-account.component';
import { LoginComponent } from "./users/login/login.component";
import {RegisterComponent} from './users/register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { BookticketComponent } from './bookticket/bookticket.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { FlightsComponent } from './bookticket/flights/flights.component';
import { HotelsComponent } from './bookticket/hotels/hotels.component';
import { TermsOfServicesComponent } from './terms-of-services/terms-of-services.component';
import { FlightTicketComponent } from './bookticket/flights/flight-ticket/flight-ticket.component';
import { HotelTicketComponent } from './bookticket/hotels/hotel-ticket/hotel-ticket.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    RegisterComponent,
    NavbarComponent,
    AboutComponent,
    ContactusComponent,
    BookticketComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    MyAccountComponent,
    FlightsComponent,
    HotelsComponent,
    TermsOfServicesComponent,
    FlightTicketComponent,
    HotelTicketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [LoginComponent, BookticketComponent, FlightTicketComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
