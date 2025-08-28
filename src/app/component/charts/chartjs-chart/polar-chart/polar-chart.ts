import { Component } from "@angular/core";

import { BaseChartDirective } from "ng2-charts";

import * as chartData from "../../../../shared/data/charts/chartjs";

@Component({
  selector: "app-polar-chart",
  imports: [BaseChartDirective],
  templateUrl: "./polar-chart.html",
  styleUrl: "./polar-chart.scss",
})
export class PolarChart {
  public polarChartLabels = chartData.polarChartLabels;
  public polarChartData = chartData.polarChartData;
  public polarChartType = chartData.polarChartType;
  public polarChartOptions = chartData.polarChartOptions;
  public polarChartLegend = chartData.polarChartLegend;
}
