import {Component} from '@angular/core';
import {LoginService} from "./login.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProyectoTrenesCliente';

  submenu_boolean = {
    cliente: false,
    empleado: false,
    viaje: false,
  }
  submenu = false;

  constructor(private loginService: LoginService) {

  }

  changeSubmenu(tipo_submenu) {
    this.submenu_boolean.cliente = false;
    this.submenu_boolean.empleado = false;
    this.submenu_boolean.viaje = false;

    this.submenu = true;
    this.submenu_boolean[tipo_submenu] = true;
  }

  getIsAdmin():boolean {
    return this.loginService.is_admin;
  }
}
