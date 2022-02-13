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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBar, MatSnackBarModule} from "@angular/material/snack-bar";
import {MatListModule} from "@angular/material/list";
import { LoginComponent } from './login/login.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ClientesModule,
    NgbModule,
    EmpleadosModule,
    HighchartsChartModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatSelectModule,
    MatInputModule,
    MatTabsModule,
    MatTableModule,
    MatIconModule,
    MatSnackBarModule,
    MatListModule,
    FormsModule
  ],
  providers: [
    ClienteService,
    EmpleadoService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}
