import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IsLoggedGuard} from "./is-logged.guard";
import {LoginComponent} from "./login/login.component";
import {IsNotLoggedGuard} from "./is-not-logged.guard";

const routes: Routes = [
  {
    path: "cliente",
    loadChildren: () => import("./clientes/clientes.module").then(m => m.ClientesModule),
    canActivate: [IsLoggedGuard]
  },
  {
    path: "empleado",
    loadChildren: () => import("./empleados/empleados.module").then(m => m.EmpleadosModule),
    canActivate: [IsLoggedGuard]
  },
  {
    path: "viaje",
    loadChildren: () => import("./viajes/viajes.module").then(m => m.ViajesModule),
    canActivate: [IsLoggedGuard]
  },
  {
    path: "login",
    component: LoginComponent,
    canActivate: [IsNotLoggedGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
