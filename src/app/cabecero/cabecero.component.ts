import { Component, OnInit } from '@angular/core';
import { egresoServicios } from '../egresos/egresos.servicio';
import { ingresoServicios } from '../ingresos/ingreso.servicio';

@Component({
  selector: 'app-cabecero',
  templateUrl: './cabecero.component.html',
  styleUrls: ['./cabecero.component.css']
})
export class CabeceroComponent implements OnInit {
  ingresos: number;
  egresos: number;

  constructor(private egresoservicio: egresoServicios, private ingresoservicio: ingresoServicios) { }

  ngOnInit() {
  }

  

}
