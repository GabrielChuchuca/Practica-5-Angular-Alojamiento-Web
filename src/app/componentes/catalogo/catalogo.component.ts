import { Component, OnInit } from '@angular/core';
import { WsJeeService } from 'src/app/services/ws-jee.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  public productos_bodega:any = []
  public bodega_id:any = []
  public productos:any = []
  public bodegas:any = []
  seleccionado:number = 0

  constructor(private WsProductos_Bodega : WsJeeService, private WsBodega_Id: WsJeeService, private WsProductos: WsJeeService, private WsBodegas: WsJeeService) { }

  ngOnInit(): void {
    /*this.WsProductos_Bodega.getProductos_Bodega().
    subscribe((response : any) => {
      this.productos_bodega = response
      console.log(this.productos_bodega)
    }, (error:any) =>{
      console.log(error)
    })*/

    /*this.WsBodega_Id.getBodega_id(this.seleccionado).
    subscribe((response : any) => {
      this.bodega_id = response
      console.log(this.bodega_id)
    }, (error:any) =>{
      console.log(error)
    })*/

    this.WsProductos.getProductos().
    subscribe((response : any) => {
      this.productos = response
      console.log(this.productos)
    }, (error:any) =>{
      console.log(error)
    })

    this.WsBodegas.getBodegas().
    subscribe((response : any) => {
      this.bodegas = response
      console.log(this.bodegas)
    }, (error:any) =>{
      console.log(error)
    })
  }
  getBID(s:number){
    this.WsBodega_Id.getBodega_id(s).
    subscribe((response : any) => {
      this.bodega_id = response
      console.log(this.bodega_id)
    }, (error:any) =>{
      console.log(error)
    })
  }

  getBIDP(s:number){
    this.WsProductos_Bodega.getProductos_Bodega(s).
    subscribe((response : any) => {
      this.productos_bodega = response
      console.log(this.productos_bodega)
    }, (error:any) =>{
      console.log(error)
    })
  }

}
