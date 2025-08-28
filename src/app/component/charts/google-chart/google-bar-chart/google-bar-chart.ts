import { Component } from "@angular/core";

import { Ng2GoogleChartsModule } from "ng2-google-charts";

import * as chartData from "../../../../shared/data/charts/google-chart";

@Component({
  selector: "app-google-bar-chart",
  imports: [Ng2GoogleChartsModule],
  templateUrl: "./google-bar-chart.html",
  styleUrl: "./google-bar-chart.scss",
})
export class GoogleBarChart {
  public barChart2 = chartData.barChart2;
}
