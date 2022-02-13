import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import highcharts3D from 'highcharts/highcharts-3d.src';
import {ViajeService} from "../../viaje.service";
import {BilletesService} from "../../billetes.service";
// @ts-ignore
highcharts3D(Highcharts);

@Component({
  selector: 'app-graficos',
  templateUrl: './graficos.component.html',
  styleUrls: ['./graficos.component.css']
})
export class GraficosComponent implements OnInit {
  todos_viajes!: any[];

  chart;
  updateFromInput = false;
  chartConstructor = "chart";
  chartCallback;
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: any = {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Trenes más rentables'
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Recaudación (€)'
      }
    },
    xAxis: {
      title: {
        text: "Trayecto"
      },
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
      name: '',
      colorByPoint: true,
      data: []
    }],
    exporting: {
      enabled: true
    },
  };


  constructor(private viajeService: ViajeService, private billeteService: BilletesService) {
    const self = this;

    this.chartCallback = chart => {
      self.chart = chart;
    };
  }

  ngOnInit(): void {
    this.viajeService.getViajes().subscribe((viajes) => {
      this.todos_viajes = viajes;
    })

    setTimeout(() => {
      this.billeteService.getBilletes().subscribe((billetes) => {
        let data = [];
        let categories = [];

        this.todos_viajes.forEach((viaje) => {
          let pagado = 0;
          billetes.forEach((billete) => {
            if(billete._idTrenPasajeros == viaje._id) {
              pagado += billete._precio;
            }
          })

          if(viaje._tipoObjeto=="pasajeros") {
            categories.push(viaje._origen + " - " + viaje._destino);

            this.chartOptions.series.push({
              name: viaje._origen + " - " + viaje._destino,
              data: [pagado]
            });
          }


        })



          this.updateFromInput = true;
          this.chart.hideLoading();
      })
    }, 500);
  }
}





