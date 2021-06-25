import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HotelsService {
  
  HOTEL_URL = 'http://localhost:3000/searchHotel';

  constructor(private http:HttpClient) { }

  searchHotels(data){
    return this.http.post<any>(`${this.HOTEL_URL}/`,data);
  }
}
