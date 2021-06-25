import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookflightService {
  private FLIGHT_BOOK_URL = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}
  
   bookFlight(flightdetails){
     return this.http.post<any>(`${this.FLIGHT_BOOK_URL}/flight-ticket`, flightdetails);
   }

}
