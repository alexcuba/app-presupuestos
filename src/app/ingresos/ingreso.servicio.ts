import { Ingresos } from './ingresos.model';
import { NumberSymbol } from '@angular/common';

export class ingresoServicios{
    ingresos: Ingresos[] = [new Ingresos("Salario",2000), new Ingresos("Venta de coche",10000)];

    TotalIngresos(){
        let total: number = 0;
        this.ingresos.forEach(element =>{
            total += element.valor;
        });
        return total;
    }

    eliminar(ingreso: Ingresos){
        const indice : number = this.ingresos.indexOf(ingreso);
        this.ingresos.splice(indice, 1);
    }
}