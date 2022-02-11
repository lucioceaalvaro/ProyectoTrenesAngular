import { Component, OnInit } from '@angular/core';
import {ClienteService} from "../../cliente.service";
import {Cliente} from "../../../models/cliente";

@Component({
  selector: 'app-get-clientes',
  templateUrl: './get-clientes.component.html',
  styleUrls: ['./get-clientes.component.css']
})
export class GetClientesComponent implements OnInit {
  clientes!: any[];

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.clienteService.getClientes().subscribe((respuesta) => {
      this.clientes = respuesta;
      console.log(respuesta)
    });
  }
  deleteCliente(dni: string){
    this.clienteService.deleteCliente(dni).subscribe((respuesta) => {
      this.ngOnInit();
    })
  }

}
