import { Component } from "@angular/core";

import { ChartistModule } from "ng-chartist";

import * as chartData from "../../../../shared/data/charts/chartist-chart";

@Component({
  selector: "app-bi-polar-line-chart",
  imports: [ChartistModule],
  templateUrl: "./bi-polar-line-chart.html",
  styleUrl: "./bi-polar-line-chart.scss",
})
export class BiPolarLineChart {
  public chart4 = chartData.chart4;
}
