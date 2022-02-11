import {Component, OnInit} from '@angular/core';
import * as Highcharts from 'highcharts';
import {ClienteService} from "../../cliente.service";
import {BilletesService} from "../../../viajes/billetes.service";

@Component({
  selector: 'app-graficos',
  templateUrl: './graficos.component.html',
  styleUrls: ['./graficos.component.css']
})
export class GraficosComponent implements OnInit {
  total_viajes!: number;
  viajes_clientes!: any[];
  viajes!: any[];
  clientes!: any[];


  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: any = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },
    title: {
      text: 'Salarios 2021/2022'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
      point: {
        valueSuffix: '%'
      }
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: false
        },
        showInLegend: true
      }
    },
    series: [{
      name: 'Cuota de billetes',
      colorByPoint: true,
      data: []
    }]
  };


  constructor(private clienteService: ClienteService, private billeteService: BilletesService) {
  }

  ngOnInit(): void {
    this.getViajesPorCliente()
    setTimeout(()=>{
      this.getTotalViajes()
    }, 500);
  }

  getTotalViajes() {
    this.billeteService.getBilletes().subscribe((respuesta) => {
      this.total_viajes = respuesta.length;
      this.viajes = respuesta;
      this.clientes.forEach((cliente) => {
        let counter = 0;
        this.viajes.forEach((viaje) => {
          cliente._dni == viaje._dni ? counter++ : true;
        })
        this.chartOptions.series[0].data.push({
          name: cliente._nombre,
          y: (counter/this.total_viajes) * 100
        })
        console.log(this.chartOptions)
      })
    })


//       {
//         name: 'Chrome',
//         y: 61.41,
//         sliced: true,
//         selected: true
//       }, {
//         name: 'Internet Explorer',
//         y: 11.84
//       }, {
//         name: 'Firefox',
//         y: 10.85
//       }, {
//         name: 'Edge',
//         y: 4.67
//       }, {
//         name: 'Safari',
//         y: 4.18
//       }, {
//         name: 'Other',
//         y: 7.05
//       }

  }

  getViajesPorCliente() {
    this.clienteService.getClientes().subscribe((clientes) => {
      this.clientes = clientes;
    })
  }
}
