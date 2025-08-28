import { Component } from "@angular/core";

import { BaseChartDirective } from "ng2-charts";

import * as chartData from "../../../../shared/data/charts/chartjs";

@Component({
  selector: "app-chartjs-line-chart",
  imports: [BaseChartDirective],
  templateUrl: "./chartjs-line-chart.html",
  styleUrl: "./chartjs-line-chart.scss",
})
export class ChartjsLineChart {
  public lineChartOptions = chartData.lineChartOptions;
  public lineChartLabels = chartData.lineChartLabels;
  public lineChartType = chartData.lineChartType;
  public lineChartLegend = chartData.lineChartLegend;
  public lineChartData = chartData.lineChartData;
}
