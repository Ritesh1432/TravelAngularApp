import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersRoutingModule } from './users-routing.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MyAccountComponent } from './my-account/my-account.component';
// import { UserdashboardComponent } from './userdashboard/userdashboard.component';
// import { TermsofservicesComponent } from './userdashboard/termsofservices/termsofservices.component';
// import { BookedticketComponent } from './userdashboard/bookedticket/bookedticket.component';

@NgModule({
  declarations: [RegisterComponent, LoginComponent, MyAccountComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule
  ]
})
export class UsersModule { }
