import { Component, OnInit } from '@angular/core';
import {BookflightService} from '../../users/service/bookflight.service';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
