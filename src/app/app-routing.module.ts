import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainClienteComponent} from "./clientes/main-cliente/main-cliente.component";
import {MainEmpleadoComponent} from "./empleados/main-empleado/main-empleado.component";
import {MainViajeComponent} from "./viajes/main-viaje/main-viaje.component";

const routes: Routes = [
  {
    path: "cliente",
    component: MainClienteComponent,
    loadChildren: () => import("./clientes/clientes.module").then(m => m.ClientesModule)
  },
  {
    path: "empleado",
    component: MainEmpleadoComponent,
    loadChildren: () => import("./empleados/empleados.module").then(m => m.EmpleadosModule)
  },
  {
    path: "viaje",
    component: MainViajeComponent,
    loadChildren: () => import("./viajes/viajes.module").then(m => m.ViajesModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
