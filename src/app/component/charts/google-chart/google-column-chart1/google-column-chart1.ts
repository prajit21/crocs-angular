import { Component } from "@angular/core";

import { Ng2GoogleChartsModule } from "ng2-google-charts";

import * as chartData from "../../../../shared/data/charts/google-chart";

@Component({
  selector: "app-google-column-chart1",
  imports: [Ng2GoogleChartsModule],
  templateUrl: "./google-column-chart1.html",
  styleUrl: "./google-column-chart1.scss",
})
export class GoogleColumnChart1 {
  public columnChart1 = chartData.columnChart1;
}
