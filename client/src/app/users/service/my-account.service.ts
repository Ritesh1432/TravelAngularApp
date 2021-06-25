import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyAccountService {
  private TICKET_URL = 'http://localhost:3000/my-account';

  constructor(private http: HttpClient) { }

  showTicket(){
    return(this.http.get<any>(`${this.TICKET_URL}`));
  }
}
