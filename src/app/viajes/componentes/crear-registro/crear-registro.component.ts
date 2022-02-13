import {Component, OnInit} from '@angular/core';
import {Registro} from "../../../models/registro";
import {ViajeService} from "../../viaje.service";
import {RegistrosService} from "../../registros.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

@Component({
  selector: 'app-crear-registro',
  templateUrl: './crear-registro.component.html',
  styleUrls: ['./crear-registro.component.css']
})
export class CrearRegistroComponent implements OnInit {
  registro: Registro = new Registro("", "", 0, "", "", "", 0, new Date());

  trenes: any[] = [];

  constructor(private viajeService: ViajeService, private registroService: RegistrosService,
              private _snackBar: MatSnackBar,
              private router: Router) {

  }

  ngOnInit(): void {this.viajeService.getViajes().subscribe((trenes) => {
    trenes.forEach((value) => {
      if(value._tipoObjeto === "mercancias")
        this.trenes.push(value)
    })
  })
  }

  crearRegistro() {
    this.registroService.crearRegistro(this.registro).subscribe((respuesta) => {
      this._snackBar.open("Registro creado correctamente", "", {
        duration: 1000,
        verticalPosition: "top"
      });
      this.router.navigateByUrl("/viaje/registros")
    })
  }

}
