import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Chart, registerables } from 'chart.js';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { debounceTime, fromEvent, Subject, takeUntil } from 'rxjs';

Chart.register(...registerables);
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatProgressBarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit, OnDestroy{
  private destroy$ = new Subject<void>();

  constructor(){
    fromEvent(window, 'resize')
      .pipe(
        debounceTime(200),
        takeUntil(this.destroy$)
      )
      .subscribe(() => {
        const width = window.innerWidth;  // Récupère la largeur de la fenêtre
        console.log('Window width:', width);
        if(window.innerWidth<1350){
          this.chart.resize();
          this.chart2.resize();
        }else{
          this.chart.resize(400, 400);
          this.chart2.resize(400, 400);
        }
      });
  }

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
            5420, 3350, 4830, 5520, 4250, 3100, 3050,
            5000, 4700, 3200, 4000, 5350, 5500, 3750,
            3000, 3450, 3600, 5290, 4600, 4400, 3750,
            2750, 5580, 4950, 3050, 3900, 3850, 5390
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
            4600, 3300, 5100, 5400, 4000, 2800, 3200,
            4700, 2200, 4200, 5000, 3300, 4100, 5200,
            3800, 3900, 3600, 4800, 5300, 4600, 4400,
            4800, 3700, 3000, 5300, 5100, 4500, 4200
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
      maintainAspectRatio: true,
      aspectRatio: 9/6,
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
  public config2: any = {
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
            112, 105, 98, 87, 99, 90, 82,
            95, 91, 84, 97, 88, 100, 94,
            80, 85, 92, 98, 104, 110, 103,
            102, 109, 101, 93, 106, 89, 107
        ]
        ,
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
            105, 100, 93, 95, 97, 92, 87, 
            104, 90, 86, 88, 101, 102, 92, 
            98, 92, 106, 111, 103, 108, 99, 
            91, 110, 97, 104, 96, 105, 100
        ]
        ,
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
      maintainAspectRatio: true,
      aspectRatio: 9/6,
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
  ngOnInit():void{
    this.chart = new Chart('MyChart', this.config);
    this.chart2 = new Chart('MyChart2', this.config2);
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
