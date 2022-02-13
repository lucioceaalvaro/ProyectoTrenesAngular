import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ViajeService} from "../../viaje.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-detail-viaje',
  templateUrl: './detail-viaje.component.html',
  styleUrls: ['./detail-viaje.component.css']
})
export class DetailViajeComponent implements OnInit {

  viaje!: any;
  viaje_id!: string;
  billetes!: any[];

  constructor(private viajeService: ViajeService, private route: ActivatedRoute,
              private _snackBar: MatSnackBar,
              private router: Router) {
    this.viaje_id = <string>this.route.snapshot.paramMap.get("id");
  }

  ngOnInit(): void {
    this.viajeService.getViaje(this.viaje_id).subscribe((data) => {
      this.viaje = data[0]

    });
  }

  actualizarOrigen() {
    this.viajeService.actualizarOrigenViaje(this.viaje._id, this.viaje._origen).subscribe((response) => {
      this._snackBar.open("Origen modificado correctamente", "", {
        duration: 1000,
        verticalPosition: "top"
      });
      this.router.navigateByUrl("/viaje")
    });
  }

  actualizarDestino() {
    this.viajeService.actualizarDestinoViaje(this.viaje._id, this.viaje._destino).subscribe((response) => {
      this._snackBar.open("Destino modificado correctamente", "", {
        duration: 1000,
        verticalPosition: "top"
      });
      this.router.navigateByUrl("/viaje")
    });
  }

  actualizarCarga() {
    this.viajeService.actualizarCarga(this.viaje._id, this.viaje._tipoCarga, this.viaje._kilosCarga).subscribe((response) => {
      this._snackBar.open("Carga actualizada correctamente", "", {
        duration: 1000,
        verticalPosition: "top"
      });
      this.router.navigateByUrl("/viaje")
    });
  }

  actualizarPrecio() {
    this.viajeService.actualizarPrecio(this.viaje._id, this.viaje._precio).subscribe((response) => {
      this._snackBar.open("Precio actualizado correctamente", "", {
        duration: 1000,
        verticalPosition: "top"
      });
      this.router.navigateByUrl("/viaje")
    });
  }

}
