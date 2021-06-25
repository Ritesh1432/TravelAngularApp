import { Component, destroyPlatform, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {FlightsService} from '../users/service/flights.service';



@Component({
  selector: 'app-bookticket',
  templateUrl: './bookticket.component.html',
  styleUrls: ['./bookticket.component.css']
})
export class BookticketComponent implements OnInit {
 
  searchFlightForm = new FormGroup({
    sourcecity: new FormControl("", [Validators.required]),
    destinationcity: new FormControl("", [Validators.required]),
    deptdate: new FormControl("", [Validators.required]),
    // retdate: new FormControl("", [Validators.required]),
    

  })
  sourceCode: String = "";
  destinationCode: String = "";
  isFlightDataAval: Boolean=false;
  flightDataArray=[];
  constructor(private flightService : FlightsService, private router : Router) { }
  //   var data = {
  //     sourceCode: this.searchFlightForm.fromloc,
  //     destinationCode: this.dest,
  //     departureDate:this.deptdate,
  // }
  ngOnInit(): void {}


  searchFlightsClicked(){
      var sourceCode = this.searchFlightForm.controls["sourcecity"].value.split("-")[1]
      var destinationCode = this.searchFlightForm.controls["destinationcity"].value.split("-")[1]
      var date = this.searchFlightForm.controls["deptdate"].value

      var data = {
        sourceCode,
        destinationCode,
        date
      }
    
      
      console.log(this.searchFlightForm.value);
      console.log("Source City", this.searchFlightForm.controls["sourcecity"].value);
      
       this.flightService.searchFlight(data).subscribe(res=>{
         console.log(res);
         this.isFlightDataAval=true;
         this.flightDataArray=res.flightData
       })
    
  }
}
