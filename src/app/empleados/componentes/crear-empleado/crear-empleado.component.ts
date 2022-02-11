import { Component, OnInit } from '@angular/core';
import {Limpiador} from "../../../models/limpiador";
import {Revisor} from "../../../models/revisor";
import {Operario} from "../../../models/operario";
import {EmpleadoService} from "../../empleado.service";
import {ViajeService} from "../../../viajes/viaje.service";
import {TrenPasajeros} from "../../../models/tren_pasajeros";
import {TrenMercancias} from "../../../models/tren_mercancias";

@Component({
  selector: 'app-crear-empleado',
  templateUrl: './crear-empleado.component.html',
  styleUrls: ['./crear-empleado.component.css']
})
export class CrearEmpleadoComponent implements OnInit {
  empleado!: any;
  viajes!: any[];
  constructor(private empleadoService: EmpleadoService, private viajeService: ViajeService) {
    this.empleado = {
      tipo: "",
      nombre: "",
      dni: "",
      telefono: "",
      sueldo: "",
      tren: "",
      viajes: "",
      horas: "",
    }
    this.viajeService.getViajes().subscribe((response) => {
      this.viajes = response;
    });
  }

  ngOnInit(): void {
  }

  crearEmpleado(): void {
    switch(this.empleado.tipo) {
      case "limpiador":
        let limpiador = new Limpiador(this.empleado.tipo, this.empleado.dni, this.empleado.nombre, this.empleado.telefono,this.empleado.sueldo, this.empleado.horas, this.empleado.tren);
        this.empleadoService.crearLimpiador(limpiador).subscribe((respuesta) => {
        })
        break;
      case "revisor":
        let revisor = new Revisor(this.empleado.tipo, this.empleado.dni, this.empleado.nombre, this.empleado.telefono,this.empleado.sueldo, this.empleado.horas, this.empleado.viajes);
        this.empleadoService.crearRevisor(revisor).subscribe((respuesta) => {
        })
        break;
      case "operario":
        let operario = new Operario(this.empleado.tipo, this.empleado.dni, this.empleado.nombre, this.empleado.telefono,this.empleado.sueldo, this.empleado.tren, this.empleado.viajes);
        this.empleadoService.crearOperario(operario).subscribe((respuesta) => {
        })
        break;
    }
  }
}
