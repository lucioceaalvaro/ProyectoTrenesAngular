import {AfterContentChecked, AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {EmpleadoService} from "../../empleado.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ViajeService} from "../../../viajes/viaje.service";
import {MatSnackBar} from "@angular/material/snack-bar";

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
              private route: ActivatedRoute,
              private _snackBar: MatSnackBar,
              private router: Router
  ) {

    this.dni_empleado = <string>this.route.snapshot.paramMap.get("dni");

    this.empleadoService.getEmpleadoDNI(this.dni_empleado).subscribe((response) => {
      this.empleado = response[0];
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
      this._snackBar.open("Salario actualizado correctamente", "", {
        duration: 1000,
        verticalPosition: "top"
      });
      this.router.navigateByUrl("/empleado")
    });
  }

  actualizarTrenOperario() {
    this.empleadoService.actualizarTrenOperario(this.empleado._dni, this.empleado._tren).subscribe((respuesta) => {
      this._snackBar.open("Tren de operario actualizado correctamente", "", {
        duration: 1000,
        verticalPosition: "top"
      });
      this.router.navigateByUrl("/empleado")
    });
  }

  actualizarViajesOperario() {
    this.empleadoService.actualizarViajesOperario(this.empleado._dni, this.empleado._viajes).subscribe((respuesta) => {
      this._snackBar.open("Viajes del operario actualizados correctamente", "", {
        duration: 1000,
        verticalPosition: "top"
      });
      this.router.navigateByUrl("/empleado")
    });
  }

  actualizarViajeHoras() {
    this.empleadoService.actualizarViajeHoras(this.empleado._dni, this.empleado._viajes, parseInt(this.empleado._horas)).subscribe((respuesta) => {
      this._snackBar.open("Horas y viajes actualizados correctamente", "", {
        duration: 1000,
        verticalPosition: "top"
      });
      this.router.navigateByUrl("/empleado")
    });
  }

  actualizarHorasTren() {
    this.empleadoService.actualizarHorasTren(this.empleado._dni, this.empleado._horas, this.empleado._tren.toString()).subscribe((respuesta) => {
      this._snackBar.open("Horas y tren actualizados correctamente", "", {
        duration: 1000,
        verticalPosition: "top"
      });
      this.router.navigateByUrl("/empleado")
    });
  }

}
