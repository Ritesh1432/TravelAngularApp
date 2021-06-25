import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    fname: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required]),
    contactno: new FormControl("", [Validators.required]),
    username: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required]),

  })

  constructor(private userService : UserService, private router : Router) { }

  ngOnInit(): void {}

  userRegister() {
    if(this.registerForm.valid){
      console.log(this.registerForm.value);
      
      this.userService.register(this.registerForm.value).subscribe( res => {
        this.registerForm.reset();
        this.router.navigate(["/login"]);
        Swal.fire({
          title:'Registered',
          text: 'You can log in now',
          icon: 'success'
        });
        
      })
    }else{
      console.log('Registration Fail');
    }
  }
}
