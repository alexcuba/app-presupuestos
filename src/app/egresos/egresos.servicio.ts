import { Egresos } from './egresos.model';

export class egresoServicios{
    egreso: Egresos[] = [new Egresos("Renta del departamento",320), new Egresos("Ropa",200)];    

    eliminar(egreso: Egresos){
        const indice: number = this.egreso.indexOf(egreso);
        this.egreso.splice(indice,1);
    }

}