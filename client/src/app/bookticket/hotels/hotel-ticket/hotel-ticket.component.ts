import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {BookhotelService} from '../../../users/service/bookhotel.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-hotel-ticket',
  templateUrl: './hotel-ticket.component.html',
  styleUrls: ['./hotel-ticket.component.css']
})
export class HotelTicketComponent implements OnInit {

  bookHotelForm = new FormGroup({
    fname: new FormControl("", [Validators.required]),
    lname: new FormControl("", [Validators.required]),
    contactno: new FormControl("", [Validators.required]),
    emailid: new FormControl("", [Validators.required]),
    checkindate: new FormControl("", [Validators.required]),
    checkintime: new FormControl("", [Validators.required]),
    checkoutdate : new FormControl("", [Validators.required]),
    checkouttime : new FormControl("", [Validators.required]),
    roompref : new FormControl("", [Validators.required]),
    noofadults: new FormControl("", [Validators.required]),
    noofchildrens: new FormControl("", [Validators.required]) 

  })

  constructor(private bookHotelService: BookhotelService, private router:Router) { }

  ngOnInit(): void { }

  bookHotel(){
    if(this.bookHotelForm.valid){
      this.bookHotelService.bookHotel(this.bookHotelForm.value).subscribe(res=>{
        this.bookHotelForm.reset();
        Swal.fire({
          title:'You have succesfully booked your hotel',
          text: 'Please check My Account for more details',
          icon: 'success'
        });
      })
    }
  }

}
