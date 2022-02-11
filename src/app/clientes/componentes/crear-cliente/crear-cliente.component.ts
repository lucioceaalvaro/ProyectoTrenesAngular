import {Component, OnInit} from '@angular/core';
import {Cliente} from "../../../models/cliente";
import {ClienteService} from "../../cliente.service";

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent implements OnInit {
  cliente!: Cliente;

  constructor(private clienteService: ClienteService) {
    this.cliente = new Cliente("", "", 0, "");
  }

  ngOnInit(): void {
  }

  crearCliente() {
    // this.cliente = new Cliente(dni, nombre, parseInt(telefono), email);
    this.clienteService.crearCliente(this.cliente).subscribe((response) => {
    });
  }
}
