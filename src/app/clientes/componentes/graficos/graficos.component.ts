import { Component, OnInit } from '@angular/core';
import {ClienteService} from "../../cliente.service";
import {BilletesService} from "../../../viajes/billetes.service";
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-graficos',
  templateUrl: './graficos.component.html',
  styleUrls: ['./graficos.component.css']
})
export class GraficosComponent implements OnInit {
  total_viajes!: number;
  viajes!: any[];
  clientes!: any[];

  chart;
  updateFromInput = false;
  chartConstructor = "chart";
  chartCallback;
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: any = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },
    title: {
      text: 'Clientes con mayor número de viajes'
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
    }],
    exporting: {
      enabled: true
    },
  };


  constructor(private clienteService: ClienteService, private billeteService: BilletesService) {
    const self = this;

    this.chartCallback = chart => {
      self.chart = chart;
    };
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
        this.updateFromInput = true;
        this.chart.hideLoading();
      })
    })

  }

  getViajesPorCliente() {
    this.clienteService.getClientes().subscribe((clientes) => {
      this.clientes = clientes;
    })
  }
}
