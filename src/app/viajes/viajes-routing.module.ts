import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GetViajesComponent} from "./componentes/get-viajes/get-viajes.component";
import {CrearViajeComponent} from "./componentes/crear-viaje/crear-viaje.component";
import {DetailViajeComponent} from "./componentes/detail-viaje/detail-viaje.component";
import {GetBilletesComponent} from "./componentes/get-billetes/get-billetes.component";
import {GetRegistrosComponent} from "./componentes/get-registros/get-registros.component";
import {CrearRegistroComponent} from "./componentes/crear-registro/crear-registro.component";
import {CrearBilleteComponent} from "./componentes/crear-billete/crear-billete.component";

const routes: Routes = [
  {
    path: "",
    component: GetViajesComponent,
  },
  {
    path: "viaje/todos",
    redirectTo: "",
    pathMatch: "full"
  },
  {
    path: "viaje/crear-tren",
    component: CrearViajeComponent,
  },
  {
    path: "viaje/detail/:id",
    component: DetailViajeComponent,
  },
  {
    path: "billetes",
    component: GetBilletesComponent,
  },
  {
    path: "registros",
    component: GetRegistrosComponent,
  },
  {
    path: "crear-registro",
    component: CrearRegistroComponent,
  },
  {
    path: "crear-billete",
    component: CrearBilleteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViajesRoutingModule { }
