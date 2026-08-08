import { Component, ChangeDetectionStrategy } from "@angular/core";

import { NgApexchartsModule } from "ng-apexcharts";

import * as chartData from "../../../../shared/data/charts/apex-chart";

@Component({
  selector: "app-bubble-chart",
  imports: [NgApexchartsModule],
  templateUrl: "./bubble-chart.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./bubble-chart.scss",
})
export class BubbleChart {
  public bubbleChart = chartData.bubbleChart;
}
