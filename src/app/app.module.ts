import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CabeceroComponent } from './cabecero/cabecero.component';
import { IngresoComponent } from './ingresos/ingreso.component';
import { EgresosComponent } from './egresos/egresos.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ingresoServicios } from './ingresos/ingreso.servicio';
import { egresoServicios } from './egresos/egresos.servicio';

@NgModule({
  declarations: [
    AppComponent,
    CabeceroComponent,
    IngresoComponent,
    EgresosComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [egresoServicios, ingresoServicios],
  bootstrap: [AppComponent]
})
export class AppModule { }
