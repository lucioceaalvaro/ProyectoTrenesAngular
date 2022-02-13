import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GetEmpleadosComponent} from "./componentes/get-empleados/get-empleados.component";
import {CrearEmpleadoComponent} from "./componentes/crear-empleado/crear-empleado.component";
import {DetailEmpleadoComponent} from "./componentes/detail-empleado/detail-empleado.component";
import {GraficosComponent} from "./componentes/graficos/graficos.component";
import {IsLoggedGuard} from "../is-logged.guard";

const routes: Routes = [

  {
    path: "",
    component: GetEmpleadosComponent,
  canActivate: [IsLoggedGuard]
  },
  {
    path: "todos",
    redirectTo: "",
    pathMatch: "full",
    canActivate: [IsLoggedGuard]
  },
  {
    path: "crear",
    component: CrearEmpleadoComponent,
    canActivate: [IsLoggedGuard]
  },
  {
    path: "detail/:dni",
    component: DetailEmpleadoComponent,
    canActivate: [IsLoggedGuard]
  },
  {
    path: "graficos",
    component: GraficosComponent,
    canActivate: [IsLoggedGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpleadosRoutingModule { }
