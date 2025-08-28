import { Component } from "@angular/core";

import { NgApexchartsModule } from "ng-apexcharts";

import * as chartData from "../../../../shared/data/charts/apex-chart";

@Component({
  selector: "app-stepline-chart",
  imports: [NgApexchartsModule],
  templateUrl: "./stepline-chart.html",
  styleUrl: "./stepline-chart.scss",
})
export class SteplineChart {
  public steplineChart = chartData.steplineChart;
}
