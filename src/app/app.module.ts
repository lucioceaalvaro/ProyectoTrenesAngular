import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ClientesModule} from "./clientes/clientes.module";
import {ClienteService} from "./clientes/cliente.service";
import {HttpClientModule} from "@angular/common/http";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {EmpleadosModule} from "./empleados/empleados.module";
import {EmpleadoService} from "./empleados/empleado.service";

import { HighchartsChartModule } from 'highcharts-angular';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ClientesModule,
    NgbModule,
    EmpleadosModule,
    HighchartsChartModule
  ],
  providers: [
    ClienteService,
    EmpleadoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
