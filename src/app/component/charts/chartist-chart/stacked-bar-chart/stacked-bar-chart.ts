import { Component, ChangeDetectionStrategy } from "@angular/core";

import { ChartistModule } from "ng-chartist";

import * as chartData from "../../../../shared/data/charts/chartist-chart";

@Component({
  selector: "app-stacked-bar-chart",
  imports: [ChartistModule],
  templateUrl: "./stacked-bar-chart.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./stacked-bar-chart.scss",
})
export class StackedBarChart {
  public chart7 = chartData.chart7;
}
