import { Component } from "@angular/core";

import { Ng2GoogleChartsModule } from "ng2-google-charts";

import * as chartData from "../../../../shared/data/charts/google-chart";

@Component({
  selector: "app-google-pie-chart4",
  imports: [Ng2GoogleChartsModule],
  templateUrl: "./google-pie-chart4.html",
  styleUrl: "./google-pie-chart4.scss",
})
export class GooglePieChart4 {
  public pieChart4 = chartData.pieChart4;
}
