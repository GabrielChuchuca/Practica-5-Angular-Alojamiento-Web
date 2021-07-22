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
      
      cedula:"0105564167",
      activo: true,
      apellido: "Cr",
      cambioPassword: false,
      correo: "ghjj@gmail.com",
      nombre: "Eduardo",
      rol: "cliente"
    
    }
    this.WsPersonas.Login(c).subscribe((res) => console.log(res))
  }

  uname:string = ""
  pword:string = ""
  msg:string = ""

  getUP():void{
    this.msg = this.uname + this.pword
  }

}
