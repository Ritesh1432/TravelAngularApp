import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {


  EXTERNAL_URL = 'http://localhost:3000/searchFlight';
  
  constructor(private http:HttpClient) { }

  searchFlight(data){
    return this.http.post<any>(`${this.EXTERNAL_URL}/`, data);
  
  }

}
