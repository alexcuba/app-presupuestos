import { Egresos } from './egresos.model';

export class egresoServicios{
    egreso: Egresos[] = [new Egresos("Renta del departamento",320), new Egresos("Ropa",200)];
    total: number;

    totalEgreso(){
        this.egreso.forEach(element => {
            this.total += element.valor;
        });     
    }
}