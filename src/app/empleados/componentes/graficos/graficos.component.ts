import {Component, OnInit} from '@angular/core';
import * as Highcharts from 'highcharts';
import highcharts3D from 'highcharts/highcharts-3d.src';
import {EmpleadoService} from "../../../empleados/empleado.service";
// @ts-ignore
highcharts3D(Highcharts);

@Component({
  selector: 'app-graficos',
  templateUrl: './graficos.component.html',
  styleUrls: ['./graficos.component.css']
})
export class GraficosComponent implements OnInit {
  todos_empleados!: any[];

  chart;
  updateFromInput = false;
  chartConstructor = "chart";
  chartCallback;
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: any = {
    chart: {
      renderTo: 'container',
      type: 'column',
      options3d: {
        enabled: true,
        alpha: 15,
        beta: 15,
        depth: 50,
        viewDistance: 25
      },
      height:"500px"
    },
    title: {
      text: 'Clasificación de empleados por salario'
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Sueldo'
      }
    },
    xAxis: {
      categories: [

      ],
      crosshair: true
    },
    accessibility: {
      point: {
        valueSuffix: '€'
      }
    },
    plotOptions: {
      column: {
        depth: 25
      }
    },
    series: [{
      type: "column",
      name: 'Empleado',
      colorByPoint: true,
      data: []
    }],
    exporting: {
      enabled: true
    },
  };


  constructor(private empleadoService: EmpleadoService) {
    const self = this;

    this.chartCallback = chart => {
      self.chart = chart;
    };
  }

  ngOnInit(): void {
    this.empleadoService.getEmpleados().subscribe((empleados) => {
      console.log(empleados)
      this.todos_empleados = empleados;
      let data = [];
      let categories = [];

      this.todos_empleados.forEach((empleado) => {
        data.push({
          name: empleado._nombre,
          y: empleado._sueldo
        });
        categories.push(empleado._nombre);
      })
        this.chartOptions.series[0].data = data;
        this.chartOptions.xAxis.categories = categories;

        this.updateFromInput = true;
        this.chart.hideLoading();
    });
  }
}

