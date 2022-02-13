import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GetClientesComponent} from "./componentes/get-clientes/get-clientes.component";
import {CrearClienteComponent} from "./componentes/crear-cliente/crear-cliente.component";
import {DetailClienteComponent} from "./componentes/detail-cliente/detail-cliente.component";
import {GraficosComponent} from "./componentes/graficos/graficos.component";
import {IsLoggedGuard} from "../is-logged.guard";

const routes: Routes = [
    {
      path: "",
      component: GetClientesComponent,
      canActivate: [IsLoggedGuard]
    },
    {
      path: "todos",
      redirectTo: "",
      pathMatch: "full"
    },
    {
      path: "crear",
      component: CrearClienteComponent,
      canActivate: [IsLoggedGuard]
    },
    {
      path: "detail/:dni",
      component: DetailClienteComponent,
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
export class ClientesRoutingModule { }
