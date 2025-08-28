import { Component } from "@angular/core";

import { Ng2GoogleChartsModule } from "ng2-google-charts";

import * as chartData from "../../../../shared/data/charts/google-chart";

@Component({
  selector: "app-google-column-chart2",
  imports: [Ng2GoogleChartsModule],
  templateUrl: "./google-column-chart2.html",
  styleUrl: "./google-column-chart2.scss",
})
export class GoogleColumnChart2 {
  public columnChart2 = chartData.columnChart2;
}
