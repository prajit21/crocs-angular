import { Component } from "@angular/core";

import { BaseChartDirective } from "ng2-charts";

import * as chartData from "../../../../shared/data/charts/chartjs";

@Component({
  selector: "app-doughnut-chart",
  imports: [BaseChartDirective],
  templateUrl: "./doughnut-chart.html",
  styleUrl: "./doughnut-chart.scss",
})
export class DoughnutChart {
  public doughnutChartLabels = chartData.doughnutChartLabels;
  public doughnutChartData = chartData.doughnutChartData;
  public doughnutChartType = chartData.doughnutChartType;
  public doughnutChartOptions = chartData.doughnutChartOptions;
  public doughnutChartLegend = chartData.doughnutChartLegend;
}
