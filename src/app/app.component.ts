import { Component, NgModule, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HighchartsChartModule } from 'highcharts-angular';
import * as Highcharts from 'highcharts';
import { Chart, Colors, registerables } from 'chart.js';

Chart.register(...registerables);
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit{
  public config: any = {
    type: 'line',
    data: {
      labels:[
        "7 Nov", "8 Nov", "9 Nov", "10 Nov", "11 Nov", "12 Nov", "13 Nov",
        "14 Nov","15 Nov", "16 Nov", "17 Nov","18 Nov", "19 Nov", "20 Nov",
        "21 Nov", "22 Nov", "23 Nov", "24 Nov", "25 Nov", "26 Nov", "27 Nov",
        "28 Nov","29 Nov", "30 Nov", "1 Dec", "2 Dec", "3 Dec", "4 Dec", "5 Dec"
    ]
    ,
      datasets: [
        {
          label: 'past 28 days',
          data: [
            5450, 5250, 4260, 2450, 2800, 5400, 5250,
            5050, 4500, 2250, 2500, 5480, 5600, 4250,
            3900, 2250, 2500, 5250, 5400, 5250, 5100,
            4250, 2500, 2450, 2425, 2400, 4950, 5050
          ],
          fill: false,
          borderWidth: 4,
          borderColor: 'rgb(6,209,255)',
          backgroundColor: 'rgb(6,209,255)',
          tension: 0.1,
          pointRadius: 2,
        },
        {
          label: 'prev 28 days',
          color:'#FFF',
          data: [
            5350, 5000, 4260, 2200, 2800, 5550, 5250,
            5250, 4600, 2250, 2400, 5480, 5400, 4150,
            3850, 2300, 2550, 5200, 5300, 5250, 5200,
            4400, 2400, 2350, 2425, 2400, 5500, 5350
          ],
          fill: false,
          borderWidth: 4,
          borderColor: 'rgb(228,200,82)',
          backgroundColor: 'rgb(228,200,82)',
          tension: 0.1,
          pointRadius: 2,
        },
      ]
    },
    options: {
      plugins: {
      legend: {
          labels: {
              color: "white",
          },
      },
  },
      maintainAspectRatio: false,
      scales:{
        x:{
          grid:{
            display: false,
            color: "transparent"
          },
          ticks:{
            color: "white"
          }
        },
        y:{
          grid:{
            color: "#404268"
          },
          ticks:{
            color: "white"
          }
        }
      },
    },
  };
  chart: any;
  chart2: any;
  chart3: any;
  chart4: any;
  ngOnInit():void{
    this.chart = new Chart('MyChart', this.config);
    this.chart2 = new Chart('MyChart2', this.config);
    this.chart3 = new Chart('MyChart3', this.config);
    this.chart4 = new Chart('MyChart4', this.config);
  }
}
