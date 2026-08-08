import { Component, ChangeDetectionStrategy } from "@angular/core";

import { NgApexchartsModule } from "ng-apexcharts";

import * as chartData from "../../../../shared/data/charts/apex-chart";

@Component({
  selector: "app-area-spaline-chart",
  imports: [NgApexchartsModule],
  templateUrl: "./area-spaline-chart.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./area-spaline-chart.scss",
})
export class AreaSpalineChart {
  public areaSpalineChart = chartData.areaSpalineChart;
}
