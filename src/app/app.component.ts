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

  constructor( private IngresoServicios: ingresoServicios, private  EgresoServicios:egresoServicios){
             this.ingresos = IngresoServicios.ingresos;
             this.egresos = EgresoServicios.egreso;
  }

  getTotalIngresos(){
    let total: number = 0;
    this.ingresos.forEach(element =>{
        total += element.valor;
    });
    return total;
  }

  getTotalEgresos(){
    let total: number = 0;
    this.egresos.forEach(element => {
        total += element.valor;
    });
    return total;     
  }

  getPorcentajeTotal(){
    return this.getTotalEgresos()/this.getTotalIngresos()
  }

  getPresupuestoTotal(){
    return  this.getTotalEgresos() - this.getTotalIngresos()
  }

}
