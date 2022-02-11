import {Component, OnInit} from '@angular/core';
import {Billete} from "../../../models/billete";
import {Cliente} from "../../../models/cliente";
import {ClienteService} from "../../../clientes/cliente.service";
import {ViajeService} from "../../viaje.service";
import {BilletesService} from "../../billetes.service";
import {TrenPasajeros} from "../../../models/tren_pasajeros";
import {TrenMercancias} from "../../../models/tren_mercancias";
import {delay} from "rxjs";

@Component({
  selector: 'app-crear-billete',
  templateUrl: './crear-billete.component.html',
  styleUrls: ['./crear-billete.component.css']
})
export class CrearBilleteComponent implements OnInit {
  billete: Billete = new Billete("", "", "", "", 0, "", "", new Date())
  clientes!: any[];
  trenes: any[] = [];

  constructor(private clienteService: ClienteService, private viajeService: ViajeService, private billeteService: BilletesService) {
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
    })
  }
}
