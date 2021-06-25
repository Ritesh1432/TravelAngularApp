import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {LoginComponent} from '../users/login/login.component';
import Swal from 'sweetalert2';
 
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  username: String = ""
  displayUsername: String = ""
  constructor( private httpclient : HttpClient, private loginComponent : LoginComponent ) {
    console.log("this.loginComponent: ", this.loginComponent);
    console.log("LoginComponent: ", loginComponent);
    console.log("inside");
    
    
    this.username = this.loginComponent.username;
    console.log(this.username);
    
   }

  ngOnInit(): void {
    console.log(sessionStorage.getItem("user"));
    
    this.displayUsername = sessionStorage.getItem("user")
    
  }

  userLogout(){
    delete sessionStorage.user;  
    }
    
  }



