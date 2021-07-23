import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User, UserResponse } from '../models/user';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WsJeeService {
  public User:Observable<User>

  constructor(private http : HttpClient) { }

  getProductos_Bodega(id:any){
    //console.log()
    return this.http.get('http://localhost:8080/Practica_3_EJB_JSF_JPA/rest/bodegas/'+id+'/productos')
  }

  getBodega_id(id:any){
    return this.http.get('http://localhost:8080/Practica_3_EJB_JSF_JPA/rest/bodegas/'+id+'/')
  }

  getBodegas(){
    return this.http.get('http://localhost:8080/Practica_3_EJB_JSF_JPA/rest/bodegas/')
  }

  getProductos(){
    return this.http.get('http://localhost:8080/Practica_3_EJB_JSF_JPA/rest/productos/')
  }

  Login(cred:User):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json', "Accept-Type": "application/json"})
    }
    return this.http.post<any>('http://localhost:8080/PruebaJR/services/rest/login', cred, httpOptions)
  }
}
