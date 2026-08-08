import { Component, ChangeDetectionStrategy } from "@angular/core";

import { BaseChartDirective } from "ng2-charts";

import * as chartData from "../../../../shared/data/charts/chartjs";

@Component({
  selector: "app-chartjs-bar-chart",
  imports: [BaseChartDirective],
  templateUrl: "./chartjs-bar-chart.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./chartjs-bar-chart.scss",
})
export class ChartjsBarChart {
  public barChartChartLabels = chartData.barChartChartLabels;
  public barChartChartData = chartData.barChartChartData;
  public barChartChartType = chartData.barChartChartType;
  public barChartChartOptions = chartData.barChartChartOptions;
  public barChartChartLegend = chartData.barChartChartLegend;
}
