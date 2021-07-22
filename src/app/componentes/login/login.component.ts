import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  username:string = ""
  password:string = ""
  msg:string = ""

  getUP():void{
    this.msg = this.username + this.password
  }

}
