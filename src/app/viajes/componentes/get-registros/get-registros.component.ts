import { Component, OnInit } from '@angular/core';
import {BilletesService} from "../../billetes.service";
import {RegistrosService} from "../../registros.service";
import {Registro} from "../../../models/registro";
import {Billete} from "../../../models/billete";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

@Component({
  selector: 'app-get-registros',
  templateUrl: './get-registros.component.html',
  styleUrls: ['./get-registros.component.css']
})
export class GetRegistrosComponent implements OnInit {

  registros!: Registro[];

  constructor(private registroService: RegistrosService,
              private _snackBar: MatSnackBar,
              private router: Router) { }

  ngOnInit(): void {
    this.registroService.getRegistros().subscribe((respuesta) => {
      this.registros = respuesta.map((reg) => {
        return new Registro(reg._id, reg._tren_id, reg._kilometros, reg._origen, reg._destino, reg._tipoCarga, reg._kilosCarga, reg._fecha);
      });
    })
  }

  deleteRegistro(id: string){
    this.registroService.deleteRegistros(id).subscribe(() => {
      this._snackBar.open("Registro eliminado correctamente", "", {
        duration: 1000,
        verticalPosition: "top"
      });
      this.ngOnInit()
    });

  }

}
