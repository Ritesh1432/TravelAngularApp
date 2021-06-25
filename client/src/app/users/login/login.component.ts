import { Component, NgModule, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required]),

  })

  username : String = ""


  constructor(private userService : UserService, private router : Router) { }

  ngOnInit(): void {}


  userLogin(){
    if (this.loginForm.valid){
      this.userService.login(this.loginForm.value).subscribe( res=>{
        this.username = res.user.username.username;
        console.log(res.user.username);
        Swal.fire({
          title:'Congralutions',
          text: 'Successfully logged in!',
          icon: 'success'
        });
        
        sessionStorage.setItem("user", res.user.username.username)
        this.loginForm.reset();
         this.router.navigateByUrl('/home');
        
      })
      
    }
        
  }

}
