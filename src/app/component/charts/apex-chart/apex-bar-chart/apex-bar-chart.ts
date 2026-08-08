import { Component, ChangeDetectionStrategy } from "@angular/core";

import { NgApexchartsModule } from "ng-apexcharts";

import * as chartData from "../../../../shared/data/charts/apex-chart";

@Component({
  selector: "app-apex-bar-chart",
  imports: [NgApexchartsModule],
  templateUrl: "./apex-bar-chart.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./apex-bar-chart.scss",
})
export class ApexBarChart {
  public barChart = chartData.barChart;
}
