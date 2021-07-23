import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { WsJeeService } from 'src/app/services/ws-jee.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public userl:any = []

  constructor(private http : HttpClient, private WsPersonas : WsJeeService) { }
  ngOnInit(): void {
    let c = new URLSearchParams()
    c.set('correo', "johana@gmail.com"),
    c.set('password', "12345")
    this.http.post('http://localhost:8080/Practica_3_EJB_JSF_JPA/rest/usuario/login', c).subscribe(res => console.log(res))
    /*const c = {
      
      usuario:"0105564167",
      password:"12345"
    
    }*/
    //this.WsPersonas.Login(c).subscribe(re => 
      //console.log(re)
    //)
  }

  uname:string = ""
  pword:string = ""
  msg:string = ""

  getUP():void{
    this.msg = this.uname + this.pword
  }

}
