import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private ROOT_URl = 'http://localhost:3000/api';

  constructor(private http : HttpClient) {}
   
 register(user){
    return this.http.post<any>(`${this.ROOT_URl}/register`, user);
  }
  login(user){
    return this.http.post<any>(`${this.ROOT_URl}/login`, user)
  }

}
