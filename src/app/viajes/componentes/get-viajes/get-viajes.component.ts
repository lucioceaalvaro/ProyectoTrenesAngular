import { Component, OnInit } from '@angular/core';
import {ViajeService} from "../../viaje.service";
import {TrenPasajeros} from "../../../models/tren_pasajeros";
import {TrenMercancias} from "../../../models/tren_mercancias";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

@Component({
  selector: 'app-get-viajes',
  templateUrl: './get-viajes.component.html',
  styleUrls: ['./get-viajes.component.css']
})
export class GetViajesComponent implements OnInit {
  viajes!: any[];

  constructor(private viajeService: ViajeService, private _snackBar: MatSnackBar, private router: Router) {

  }

  ngOnInit(): void {
    this.viajeService.getViajes().subscribe((data) => {
      this.viajes = data;
    })
  }

  deleteTrenes(id_tren: string) {
    this.viajeService.deleteTrenes(id_tren).subscribe(() => {
      this.ngOnInit()
    })
  }

}
