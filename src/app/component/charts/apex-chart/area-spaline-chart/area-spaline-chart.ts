import { Component } from "@angular/core";

import { NgApexchartsModule } from "ng-apexcharts";

import * as chartData from "../../../../shared/data/charts/apex-chart";

@Component({
  selector: "app-area-spaline-chart",
  imports: [NgApexchartsModule],
  templateUrl: "./area-spaline-chart.html",
  styleUrl: "./area-spaline-chart.scss",
})
export class AreaSpalineChart {
  public areaSpalineChart = chartData.areaSpalineChart;
}
