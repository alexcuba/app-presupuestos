import { Component, OnInit } from '@angular/core';
import { egresoServicios } from '../egresos/egresos.servicio';
import { ingresoServicios } from '../ingresos/ingreso.servicio';
import { Ingresos } from '../ingresos/ingresos.model';
import { Egresos } from '../egresos/egresos.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  
  tipo: string = "ingresoOperacion";
  descripcionInput: string;
  valorInput: number; 

  constructor(private egresoService: egresoServicios,
              private ingresoService: ingresoServicios
              ) { }

  ngOnInit() {
  }

  tipoOperacion(evento){
    this.tipo = evento.target.value;
  }

  agregarValor(){
    if(this.tipo == "ingresoOperacion")
       this.ingresoService.ingresos.push(new Ingresos(this.descripcionInput, this.valorInput));
    else
      this.egresoService.egreso.push(new Egresos(this.descripcionInput, this.valorInput));
  }

}
