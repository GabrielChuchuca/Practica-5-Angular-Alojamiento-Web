import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WsJeeService {

  constructor(private http : HttpClient) { }

  getPersonas(){
    //console.log()
    return this.http.get('http://localhost:8080/Practica_3_EJB_JSF_JPA/rest/bodegas/3/productos')
  }
}
