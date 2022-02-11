import {Component, OnInit} from '@angular/core';
import {Registro} from "../../../models/registro";
import {ViajeService} from "../../viaje.service";
import {RegistrosService} from "../../registros.service";
import {TrenPasajeros} from "../../../models/tren_pasajeros";
import {TrenMercancias} from "../../../models/tren_mercancias";

@Component({
  selector: 'app-crear-registro',
  templateUrl: './crear-registro.component.html',
  styleUrls: ['./crear-registro.component.css']
})
export class CrearRegistroComponent implements OnInit {
  registro: Registro = new Registro("", "", 0, "", "", new Date());

  trenes: any[] = [];

  constructor(private viajeService: ViajeService, private registroService: RegistrosService) {
    this.viajeService.getViajes().subscribe((trenes) => {
      trenes.forEach((value) => {
        if(value._tipoObjeto === "mercancias")
          this.trenes.push(value)
      })
    })
  }

  ngOnInit(): void {
  }

  crearRegistro() {
    this.registroService.crearRegistro(this.registro).subscribe((respuesta) => {
    })
  }

}
