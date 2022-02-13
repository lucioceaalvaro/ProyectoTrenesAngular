import {Component, OnInit} from '@angular/core';
import {ViajeService} from "../../viaje.service";
import {TrenMercancias} from "../../../models/tren_mercancias";
import {TrenPasajeros} from "../../../models/tren_pasajeros";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

@Component({
  selector: 'app-crear-viaje',
  templateUrl: './crear-viaje.component.html',
  styleUrls: ['./crear-viaje.component.css']
})
export class CrearViajeComponent implements OnInit {
  tren!: any;

  constructor(private viajeService: ViajeService, private _snackBar: MatSnackBar, private router: Router) {
    this.tren = {
      tipo: "",
      id: "",
      origen: "",
      destino: "",
      carga: "",
      cantidad: "",
      nPasajeros: "",
      nPlazas: "",
      precio: ""
    }
  }

  ngOnInit(): void {
  }

  crearTren(): void {
    switch (this.tren.tipo) {
      case "mercancias":
        let merc = new TrenMercancias(this.tren.tipoObjeto, this.tren.id, this.tren.origen, this.tren.destino, this.tren.carga, this.tren.cantidad);
        this.viajeService.crearTrenMercancias(merc).subscribe((respuesta) => {
          this._snackBar.open("Tren de mercancías creado correctamente", "", {
            duration: 1000,
            verticalPosition: "top"
          });
          this.router.navigateByUrl("/viaje")
        })
        break;
      case "pasajeros":
        let pas = new TrenPasajeros(this.tren.tipoObjeto, this.tren.id, this.tren.origen, this.tren.destino, this.tren.nPasajeros, this.tren.nPlazas, this.tren.precio);
        this.viajeService.crearTrenPasajeros(pas).subscribe((respuesta) => {
          this._snackBar.open("Tren de pasajeros creado correctamente", "", {
            duration: 1000,
            verticalPosition: "top"
          });
          this.router.navigateByUrl("/viaje")
        });
    }
  }

}
