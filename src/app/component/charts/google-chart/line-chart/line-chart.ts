import { Component } from "@angular/core";

import { Ng2GoogleChartsModule } from "ng2-google-charts";

import * as chartData from "../../../../shared/data/charts/google-chart";

@Component({
  selector: "app-line-chart",
  imports: [Ng2GoogleChartsModule],
  templateUrl: "./line-chart.html",
  styleUrl: "./line-chart.scss",
})
export class LineChart {
  public lineChart = chartData.lineChart;
}
