import {Component, NgZone, OnInit} from '@angular/core';
import {Cliente} from "../../../models/cliente";
import {ClienteService} from "../../cliente.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent implements OnInit {
  cliente!: Cliente;

  constructor(private clienteService: ClienteService, private _snackBar: MatSnackBar, private router: Router) {
    this.cliente = new Cliente("", "", 0, "");
  }

  ngOnInit(): void {
  }

  crearCliente() {
    this.clienteService.crearCliente(this.cliente).subscribe(() => {
      this._snackBar.open("Cliente creado correctamente", "", {
        duration: 1000,
        verticalPosition: "top"
      });
      this.router.navigateByUrl("/cliente")
    })

  }
}
