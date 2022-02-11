import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GetClientesComponent} from "./componentes/get-clientes/get-clientes.component";
import {CrearClienteComponent} from "./componentes/crear-cliente/crear-cliente.component";
import {DetailClienteComponent} from "./componentes/detail-cliente/detail-cliente.component";
import {GraficosComponent} from "./componentes/graficos/graficos.component";

const routes: Routes = [
    {
      path: "",
      component: GetClientesComponent,
    },
    {
      path: "cliente/todos",
      redirectTo: "",
      pathMatch: "full"
    },
    {
      path: "cliente/crear",
      component: CrearClienteComponent,
    },
    {
      path: "cliente/detail/:dni",
      component: DetailClienteComponent,
    },
    {
      path: "cliente/graficos",
      component: GraficosComponent,
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
