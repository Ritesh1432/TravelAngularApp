import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { MyAccountService } from '../service/my-account.service';
@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {

  result=[]

  constructor(private myaccountService : MyAccountService, private router:Router ) { }

  ngOnInit(): void {
    this.myaccountService.showTicket().subscribe(res=>{
      this.result =  res.result;
      console.log(this.result);
    })
  }



}
