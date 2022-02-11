import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GetEmpleadosComponent} from "./componentes/get-empleados/get-empleados.component";
import {CrearEmpleadoComponent} from "./componentes/crear-empleado/crear-empleado.component";
import {DetailEmpleadoComponent} from "./componentes/detail-empleado/detail-empleado.component";

const routes: Routes = [

  {
    path: "",
    component: GetEmpleadosComponent,
  },
  {
    path: "empleado/todos",
    redirectTo: "",
    pathMatch: "full"
  },
  {
    path: "empleado/crear",
    component: CrearEmpleadoComponent
  },
  {
    path: "empleado/detail/:dni",
    component: DetailEmpleadoComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpleadosRoutingModule { }
