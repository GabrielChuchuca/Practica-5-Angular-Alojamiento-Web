import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { WsJeeService } from 'src/app/services/ws-jee.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public User:Observable<User>
  public u:any = []

  constructor(private WsPersonas : WsJeeService) { }

  ngOnInit(): void {

  }

  uname:string = ""
  pword:string = ""
  msg:string = ""

  getUP():void{
    let c = new URLSearchParams()
    if(this.uname != "" && this.pword != ""){
      c.set('correo', this.uname),
      c.set('password', this.pword)
      
      this.WsPersonas.Login(c).subscribe((res) => {
          console.log(res)
          if (res.activo == true){
            this.msg = "USUARIO ACTIVO"
          }else{
            this.msg = "USUARIO INACTIVO, CONSULTE CON EL ADMINSITRADOR PARA ACTIVAR SU CUENTA"
          }
        },
        (error) => {
          console.log("E AQUI EL ERROR", error)
          this.msg = "USUARIO NO ENCONTRADO / NO EXISTE"
        }
      )
    }else{
      this.msg = "Faltan credenciales"
    }
  }

}
