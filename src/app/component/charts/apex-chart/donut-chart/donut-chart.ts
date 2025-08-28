import { Component } from "@angular/core";

import { NgApexchartsModule } from "ng-apexcharts";

import * as chartData from "../../../../shared/data/charts/apex-chart";

@Component({
  selector: "app-donut-chart",
  imports: [NgApexchartsModule],
  templateUrl: "./donut-chart.html",
  styleUrl: "./donut-chart.scss",
})
export class DonutChart {
  public donutChart = chartData.donutChart;
}
