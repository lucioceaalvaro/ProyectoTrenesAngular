import {AfterContentChecked, AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {EmpleadoService} from "../../empleado.service";
import {ActivatedRoute} from "@angular/router";
import {Operario} from "../../../models/operario";
import {Limpiador} from "../../../models/limpiador";
import {Revisor} from "../../../models/revisor";
import {ViajeService} from "../../../viajes/viaje.service";
import {TrenPasajeros} from "../../../models/tren_pasajeros";
import {TrenMercancias} from "../../../models/tren_mercancias";

@Component({
  selector: 'app-detail-empleado',
  templateUrl: './detail-empleado.component.html',
  styleUrls: ['./detail-empleado.component.css']
})
export class DetailEmpleadoComponent implements OnInit {
  empleado!: any;

  dni_empleado!: string;
  trenes!: any[];
  salario!: string;

  @ViewChild("select_trenes") select!: ElementRef;

  constructor(private empleadoService: EmpleadoService,
              private viajeService: ViajeService,
              private route: ActivatedRoute) {

    this.dni_empleado = <string>this.route.snapshot.paramMap.get("dni");

    this.empleadoService.getEmpleadoDNI(this.dni_empleado).subscribe((response) => {
      this.empleado = response[0];
      // switch (response[0]._tipoObjeto) {
      //   case "operario":
      //     this.empleado = new Operario(response[0]._tipoObjeto, response[0]._dni, response[0]._nombre, response[0]._telefono, response[0]._sueldo, response[0]._tren, response[0]._viajes);
      //     break;
      //   case "limpiador":
      //     this.empleado = new Limpiador(response[0]._tipoObjeto, response[0]._dni, response[0]._nombre, response[0]._telefono, response[0]._sueldo, response[0]._horas, response[0]._tren);
      //     break;
      //   case "revisor":
      //     this.empleado = new Revisor(response[0]._tipoObjeto, response[0]._dni, response[0]._nombre, response[0]._telefono, response[0]._sueldo, response[0]._horas, response[0]._viajes);
      //     break;
      // }
    });
    this.viajeService.getViajes().subscribe((respuesta) => {
      this.trenes = respuesta;
    })
    setTimeout(() => {
      this.empleadoService.calcularSalario(this.dni_empleado).subscribe((respuesta) => {
        this.salario = respuesta.toString()
      })
    }, 500)


  }

  ngOnInit(): void {
  }

  actualizarSalario() {
    this.empleadoService.actualizarSalarioEmpleado(this.empleado._dni, this.empleado._sueldo).subscribe((respuesta) => {
    });
  }

  actualizarTrenOperario() {
    this.empleadoService.actualizarTrenOperario(this.empleado._dni, this.empleado._tren).subscribe((respuesta) => {
    });
  }

  actualizarViajesOperario() {
    this.empleadoService.actualizarViajesOperario(this.empleado._dni, this.empleado._viajes).subscribe((respuesta) => {
    });
  }

  actualizarViajeHoras() {
    this.empleadoService.actualizarViajeHoras(this.empleado._dni, this.empleado._viajes, parseInt(this.empleado._horas)).subscribe((respuesta) => {
    });
  }

  actualizarHorasTren() {
    this.empleadoService.actualizarHorasTren(this.empleado._dni, this.empleado._horas, this.empleado._tren.toString()).subscribe((respuesta) => {
    });
  }

}
