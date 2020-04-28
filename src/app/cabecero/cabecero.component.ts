import { Component, OnInit, Input } from '@angular/core';
import { egresoServicios } from '../egresos/egresos.servicio';
import { ingresoServicios } from '../ingresos/ingreso.servicio';

@Component({
  selector: 'app-cabecero',
  templateUrl: './cabecero.component.html',
  styleUrls: ['./cabecero.component.css']
})
export class CabeceroComponent implements OnInit {
  @Input() ingresoTotal: number;
  @Input() egresosTotal: number;
  @Input() presupuestoTotal: number;
  @Input() porcentajeTotal: number;

  constructor(private egresoservicio: egresoServicios, private ingresoservicio: ingresoServicios) { }

  ngOnInit() {
  }

  

}
