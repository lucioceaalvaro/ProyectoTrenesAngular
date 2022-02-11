import {Component, OnInit} from '@angular/core';
import {ClienteService} from "../../../clientes/cliente.service";
import {ActivatedRoute} from "@angular/router";
import {ViajeService} from "../../viaje.service";
import {Billete} from "../../../models/billete";
import {TrenPasajeros} from "../../../models/tren_pasajeros";
import {TrenMercancias} from "../../../models/tren_mercancias";

@Component({
  selector: 'app-detail-viaje',
  templateUrl: './detail-viaje.component.html',
  styleUrls: ['./detail-viaje.component.css']
})
export class DetailViajeComponent implements OnInit {

  viaje!: any;
  viaje_id!: string;
  billetes!: any[];

  constructor(private viajeService: ViajeService, private route: ActivatedRoute) {
    this.viaje_id = <string>this.route.snapshot.paramMap.get("id");
  }

  ngOnInit(): void {
    this.viajeService.getViaje(this.viaje_id).subscribe((data) => {
      this.viaje = data[0]
      console.log(this.viaje)
    });
  }

  actualizarOrigen() {
    console.log(this.viaje._id, this.viaje._origen)
    this.viajeService.actualizarOrigenViaje(this.viaje._id, this.viaje._origen).subscribe((response) => {
      console.log(response);
    });
  }

  actualizarDestino() {
    console.log(this.viaje._id, this.viaje._destino)
    this.viajeService.actualizarDestinoViaje(this.viaje._id, this.viaje._destino).subscribe((response) => {
      console.log(response);
    });
  }

  actualizarCarga() {
    this.viajeService.actualizarCarga(this.viaje._id, this.viaje._tipoCarga, this.viaje._kilosCarga).subscribe((response) => {
      console.log(response);
    });
  }

  actualizarPrecio() {
    this.viajeService.actualizarPrecio(this.viaje._id, this.viaje._precio).subscribe((response) => {
      console.log(response);
    });
  }

}
