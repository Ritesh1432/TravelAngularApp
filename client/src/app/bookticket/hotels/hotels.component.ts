import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {HotelsService} from '../../users/service/hotels.service';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {

  searchHotelsForm = new FormGroup({
   location : new FormControl("", [Validators.required]),
   checkindate : new FormControl("", [Validators.required]),
   checkoutdate : new FormControl("", [Validators.required]),  
  })
  
  location: String="";
  checkindate: String="";
  checkoutdate:String="";
  hotelDataArray=[];
  isHotelDataAval: Boolean=false;
  
  constructor(private hotelService:HotelsService, private router:Router) { }

  ngOnInit(): void {}

  searchHotelsClicked(){
    var location= this.searchHotelsForm.controls["location"].value
    var checkindate = this.searchHotelsForm.controls["checkindate"].value
    var checkoutdate = this.searchHotelsForm.controls["checkoutdate"].value
    var data = {
      location: location,
      checkindate: checkindate,
      checkoutdate: checkoutdate
  }

  console.log(this.searchHotelsForm.value);
  console.log("Location", this.searchHotelsForm.controls["location"].value);

  this.hotelService.searchHotels(data).subscribe(res=>{    
    console.log(res);
    this.isHotelDataAval=true;
    this.hotelDataArray=res.hotelData
  })
  
  }

}
