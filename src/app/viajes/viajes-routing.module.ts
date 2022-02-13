import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GetViajesComponent} from "./componentes/get-viajes/get-viajes.component";
import {CrearViajeComponent} from "./componentes/crear-viaje/crear-viaje.component";
import {DetailViajeComponent} from "./componentes/detail-viaje/detail-viaje.component";
import {GetBilletesComponent} from "./componentes/get-billetes/get-billetes.component";
import {GetRegistrosComponent} from "./componentes/get-registros/get-registros.component";
import {CrearRegistroComponent} from "./componentes/crear-registro/crear-registro.component";
import {CrearBilleteComponent} from "./componentes/crear-billete/crear-billete.component";
import {GraficosComponent} from "./componentes/graficos/graficos.component";
import {IsLoggedGuard} from "../is-logged.guard";

const routes: Routes = [
  {
    path: "",
    component: GetViajesComponent,
    canActivate: [IsLoggedGuard]
  },
  {
    path: "todos",
    redirectTo: "",
    pathMatch: "full",
    canActivate: [IsLoggedGuard]
  },
  {
    path: "crear-tren",
    component: CrearViajeComponent,
    canActivate: [IsLoggedGuard]
  },
  {
    path: "detail/:id",
    component: DetailViajeComponent,
    canActivate: [IsLoggedGuard]
  },
  {
    path: "billetes",
    component: GetBilletesComponent,
    canActivate: [IsLoggedGuard]
  },
  {
    path: "registros",
    component: GetRegistrosComponent,
    canActivate: [IsLoggedGuard]
  },
  {
    path: "crear-registro",
    component: CrearRegistroComponent,
    canActivate: [IsLoggedGuard]
  },
  {
    path: "crear-billete",
    component: CrearBilleteComponent,
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
export class ViajesRoutingModule { }
