import { Component, ChangeDetectionStrategy } from "@angular/core";

import { NgApexchartsModule } from "ng-apexcharts";

import * as chartData from "../../../../shared/data/charts/apex-chart";

@Component({
  selector: "app-basic-area-chart",
  imports: [NgApexchartsModule],
  templateUrl: "./basic-area-chart.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./basic-area-chart.scss",
})
export class BasicAreaChart {
  public BasicAreaChart = chartData.basicArea;
}
