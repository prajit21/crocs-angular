import { Component } from "@angular/core";

import { ChartistModule } from "ng-chartist";

import * as chartData from "../../../../shared/data/charts/chartist-chart";

@Component({
  selector: "app-line-chart-area",
  imports: [ChartistModule],
  templateUrl: "./line-chart-area.html",
  styleUrl: "./line-chart-area.scss",
})
export class LineChartArea {
  public chart5 = chartData.chart5;
}
