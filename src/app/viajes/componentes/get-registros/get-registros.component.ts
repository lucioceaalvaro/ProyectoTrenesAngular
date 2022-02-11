import { Component, OnInit } from '@angular/core';
import {BilletesService} from "../../billetes.service";
import {RegistrosService} from "../../registros.service";
import {Registro} from "../../../models/registro";

@Component({
  selector: 'app-get-registros',
  templateUrl: './get-registros.component.html',
  styleUrls: ['./get-registros.component.css']
})
export class GetRegistrosComponent implements OnInit {

  registros!: any[];

  constructor(private registroService: RegistrosService) { }

  ngOnInit(): void {
    this.registroService.getRegistros().subscribe((respuesta) => {
      this.registros = respuesta;
    })
  }

  deleteRegistro(id: string){
    this.registroService.deleteRegistros(id).subscribe();
  }

  getFecha(fecha: string) {
    let date = new Date(fecha)
    return date.getDate() + "/" + date.getMonth()+1 + "/" + date.getFullYear();
  }

}
