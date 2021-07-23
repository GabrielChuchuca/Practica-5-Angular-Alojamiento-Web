import { Component, OnInit } from '@angular/core';
import { WsJeeService } from 'src/app/services/ws-jee.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public userl:any = []

  constructor(private WsPersonas : WsJeeService) { }

  ngOnInit(): void {
    const c = {
      
      usuario:"0105564167",
      password:"12345"
    
    }
    this.WsPersonas.Login(c).subscribe(re => 
      console.log(re)
    )
  }

  uname:string = ""
  pword:string = ""
  msg:string = ""

  getUP():void{
    this.msg = this.uname + this.pword
  }

}
