import {Component, OnInit} from '@angular/core';
import {Billete} from "../../../models/billete";
import {Cliente} from "../../../models/cliente";
import {ClienteService} from "../../../clientes/cliente.service";
import {ViajeService} from "../../viaje.service";
import {BilletesService} from "../../billetes.service";
import {TrenPasajeros} from "../../../models/tren_pasajeros";
import {TrenMercancias} from "../../../models/tren_mercancias";
import {delay} from "rxjs";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

@Component({
  selector: 'app-crear-billete',
  templateUrl: './crear-billete.component.html',
  styleUrls: ['./crear-billete.component.css']
})
export class CrearBilleteComponent implements OnInit {
  billete: Billete = new Billete("", "", "", "", 0, "", "", new Date())
  clientes!: any[];
  trenes: any[] = [];

  constructor(private clienteService: ClienteService, private viajeService: ViajeService, private billeteService: BilletesService,
              private _snackBar: MatSnackBar,
              private router: Router) {
    this.clienteService.getClientes().subscribe((clientes) => {
      this.clientes = clientes;
    })

    setTimeout(() => {
      this.viajeService.getViajes().subscribe((viajes) => {
        console.log(viajes)
        viajes.forEach((value) => {
          if (value._tipoObjeto === "pasajeros") {
            this.trenes.push(value)
          }
        })
      })
    }, 500);

  }

  ngOnInit(): void {

  }

  crearBillete() {
    this.billeteService.crearBillete(this.billete).subscribe((respuesta) => {
      this._snackBar.open("Billete creado correctamente", "", {
        duration: 1000,
        verticalPosition: "top"
      });
      this.router.navigateByUrl("/viaje/billetes")
    })
  }
}
