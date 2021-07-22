import { Component, OnInit } from '@angular/core';
import { WsJeeService } from 'src/app/services/ws-jee.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {
  public personas:any = []

  constructor(private WsPersonas : WsJeeService) { }

  ngOnInit(): void {
    this.WsPersonas.getPersonas().
    subscribe((response : any) => {
      this.personas = response
      console.log(this.personas)
    }, (error:any) =>{
      console.log(error)
    })
  }

}
