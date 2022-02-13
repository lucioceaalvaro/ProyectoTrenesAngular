import {Component, OnInit} from '@angular/core';
import {RegistrosService} from "../../registros.service";
import {BilletesService} from "../../billetes.service";
import {Billete} from "../../../models/billete";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

@Component({
  selector: 'app-get-billetes',
  templateUrl: './get-billetes.component.html',
  styleUrls: ['./get-billetes.component.css']
})
export class GetBilletesComponent implements OnInit {
  billetes!: Billete[];

  constructor(private billeteService: BilletesService,
              private _snackBar: MatSnackBar,
              private router: Router) {
  }

  ngOnInit(): void {
    this.billeteService.getBilletes().subscribe((respuesta) => {
      this.billetes = respuesta.map((bill) => {
        return new Billete(bill._id, bill._dni, bill._idTrenPasajeros, bill._asiento, bill._precio, bill._origen, bill._destino, bill._fecha);
      });
    })
  }

  deleteBillete(dni: string) {
    this.billeteService.deleteBilletes(dni).subscribe((respuesta) => {
      this._snackBar.open("Billete eliminado correctamente", "", {
        duration: 1000,
        verticalPosition: "top"
      });
      this.ngOnInit()
    })
  }
}
