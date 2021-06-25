import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookhotelService {
  private HOTEL_BOOK_URL = 'http://localhost:3000/api';


  constructor(private http: HttpClient) { }
  bookHotel(hoteldetails){
    return this.http.post<any>(`${this.HOTEL_BOOK_URL}/hotel-ticket`, hoteldetails);
  }
}
