import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViajesRoutingModule } from './viajes-routing.module';
import { GetViajesComponent } from './componentes/get-viajes/get-viajes.component';
import { MainViajeComponent } from './main-viaje/main-viaje.component';
import { CrearViajeComponent } from './componentes/crear-viaje/crear-viaje.component';
import {FormsModule} from "@angular/forms";
import { DetailViajeComponent } from './componentes/detail-viaje/detail-viaje.component';
import { GetBilletesComponent } from './componentes/get-billetes/get-billetes.component';
import { GetRegistrosComponent } from './componentes/get-registros/get-registros.component';
import { CrearRegistroComponent } from './componentes/crear-registro/crear-registro.component';
import { CrearBilleteComponent } from './componentes/crear-billete/crear-billete.component';
import { GraficosComponent } from './componentes/graficos/graficos.component';
import {HighchartsChartModule} from "highcharts-angular";
import {MatIconModule} from "@angular/material/icon";



@NgModule({
  declarations: [
    GetViajesComponent,
    MainViajeComponent,
    CrearViajeComponent,
    DetailViajeComponent,
    GetBilletesComponent,
    GetRegistrosComponent,
    CrearRegistroComponent,
    CrearBilleteComponent,
    GraficosComponent,

  ],
  imports: [
    CommonModule,
    ViajesRoutingModule,
    FormsModule,
    HighchartsChartModule,
    MatIconModule
  ]
})
export class ViajesModule { }
