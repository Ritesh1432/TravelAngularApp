import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {BookflightService} from '../../../users/service/bookflight.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-flight-ticket',
  templateUrl: './flight-ticket.component.html',
  styleUrls: ['./flight-ticket.component.css']
})
export class FlightTicketComponent implements OnInit {

  bookFlightForm = new FormGroup({
    fname: new FormControl("", [Validators.required]),
    lname: new FormControl("", [Validators.required]),
    contactno: new FormControl("", [Validators.required]),
    emailid: new FormControl("", [Validators.required]),
    sourcecity: new FormControl("", [Validators.required]),
    destcity: new FormControl("", [Validators.required]),
    deptdate: new FormControl("", [Validators.required]),
    noofadults: new FormControl("", [Validators.required]),
    noofchildrens: new FormControl("", [Validators.required]),
    travelclass: new FormControl("", [Validators.required])  

  })

  constructor(private bookFlightService : BookflightService,private router : Router) { }

  ngOnInit(): void {}
  
  bookFlight() {
    
    if (this.bookFlightForm.valid){
       this.bookFlightService.bookFlight(this.bookFlightForm.value).subscribe(res=>{
         this.bookFlightForm.reset();
         Swal.fire({
          title:'You have succesfully booked your flight',
          text: 'Please check My Account for more details',
          icon: 'success'
        });

       })
      }
    }
  


}
