import { Component, OnInit } from '@angular/core';
import {ClienteService} from "../../cliente.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Cliente} from "../../../models/cliente";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-detail-cliente',
  templateUrl: './detail-cliente.component.html',
  styleUrls: ['./detail-cliente.component.css']
})
export class DetailClienteComponent implements OnInit {

  cliente!: Cliente;
  cliente_dni!: string;
  constructor(private clienteService: ClienteService, private route: ActivatedRoute, private _snackBar: MatSnackBar, private router: Router) {
    this.cliente_dni = <string>this.route.snapshot.paramMap.get("dni");
  }

  ngOnInit(): void {
    this.clienteService.getClienteDNI(this.cliente_dni).subscribe((data) => {
      this.cliente = new Cliente(data[0]._dni, data[0]._nombre, data[0]._telefono, data[0]._email);
    });
  }

  actualizarTlfCli() {
    this.clienteService.actualizarTlfCli(this.cliente.dni, this.cliente.telefono).subscribe((response) => {
      this._snackBar.open("Cliente actualizado correctamente", "", {
        duration: 1000,
        verticalPosition: "top"
      });
      this.router.navigateByUrl("/cliente")
    });
  }

}
