import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainClienteComponent} from './main-cliente/main-cliente.component';
import {GetClientesComponent} from './componentes/get-clientes/get-clientes.component';
import {ClientesRoutingModule} from "./clientes-routing.module";
import {ClienteService} from "./cliente.service";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CrearClienteComponent } from './componentes/crear-cliente/crear-cliente.component';
import {FormsModule} from "@angular/forms";
import { DetailClienteComponent } from './componentes/detail-cliente/detail-cliente.component';
import { GraficosComponent } from './componentes/graficos/graficos.component';
import {HighchartsChartModule} from "highcharts-angular";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    MainClienteComponent,
    GetClientesComponent,
    CrearClienteComponent,
    DetailClienteComponent,
    GraficosComponent,
  ],
    imports: [
        CommonModule,
        ClientesRoutingModule,
        NgbModule,
        FormsModule,
        HighchartsChartModule,
        MatIconModule
    ],
  providers: [
    ClienteService
  ]
})
export class ClientesModule {
}
