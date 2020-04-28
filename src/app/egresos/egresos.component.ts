import { Component, OnInit, Input } from '@angular/core';
import { Egresos } from './egresos.model';
import { egresoServicios } from './egresos.servicio';

@Component({
  selector: 'app-egresos',
  templateUrl: './egresos.component.html',
  styleUrls: ['./egresos.component.css']
})
export class EgresosComponent implements OnInit {
  egresos: Egresos[] = []
  @Input() ingresoTotal : number;
  
  constructor(private egresosServicio: egresoServicios) { }

  ngOnInit() {
    this.egresos = this.egresosServicio.egreso
  }

  eliminarEgresos(egreso: Egresos){
    this.egresosServicio.eliminar(egreso);
  }

  porcentaje(egreso: Egresos){
      return egreso.valor/this.ingresoTotal;
  }

}
