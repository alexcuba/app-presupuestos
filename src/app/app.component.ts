import { Component } from '@angular/core';
import { Ingresos } from './ingresos/ingresos.model';
import { Egresos } from './egresos/egresos.model';
import { ingresoServicios } from './ingresos/ingreso.servicio';
import { egresoServicios } from './egresos/egresos.servicio';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'presupuesto-app';

  ingresos : Ingresos[] = [];
  egresos : Egresos[] = [];
  totalIngresos : number;
  totalEgresos : number;

  constructor( private IngresoServicios: ingresoServicios, private  EgresoServicios:egresoServicios){
             this.ingresos = IngresoServicios.ingresos;
             this.egresos = EgresoServicios.egreso;
             this.totalIngresos = IngresoServicios.TotalIngresos();
             this.totalEgresos = EgresoServicios.TotalEgresos();
  }

  getPorcentajeTotal(){
    return this.totalEgresos/this.totalIngresos
  }

  getPresupuestoTotal(){
    return  this.totalIngresos - this.totalEgresos
  }

}
