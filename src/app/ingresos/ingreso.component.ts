import { Component, OnInit } from '@angular/core';
import { Ingresos } from './ingresos.model';
import { ingresoServicios } from './ingreso.servicio';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {
  ingresos: Ingresos[] = []

  constructor(private  ingresoServicio: ingresoServicios) { }

  ngOnInit() {
    this.ingresos = this.ingresoServicio.ingresos 
  }

  eliminarIngreso(ingreso:Ingresos){
    this.ingresoServicio.eliminar(ingreso);
  }

}
