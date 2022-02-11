import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {EmpleadosRoutingModule} from './empleados-routing.module';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule} from "@angular/forms";
import {EmpleadoService} from "./empleado.service";
import { GetEmpleadosComponent } from './componentes/get-empleados/get-empleados.component';
import { MainEmpleadoComponent } from './main-empleado/main-empleado.component';
import { CrearEmpleadoComponent } from './componentes/crear-empleado/crear-empleado.component';
import { DetailEmpleadoComponent } from './componentes/detail-empleado/detail-empleado.component';


@NgModule({
  declarations: [
    GetEmpleadosComponent,
    MainEmpleadoComponent,
    CrearEmpleadoComponent,
    DetailEmpleadoComponent
  ],
  imports: [
    CommonModule,
    EmpleadosRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [
    EmpleadoService
  ]
})
export class EmpleadosModule {
}
