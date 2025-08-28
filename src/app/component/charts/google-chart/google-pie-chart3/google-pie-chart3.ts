import { Component } from "@angular/core";

import { Ng2GoogleChartsModule } from "ng2-google-charts";

import * as chartData from "../../../../shared/data/charts/google-chart";

@Component({
  selector: "app-google-pie-chart3",
  imports: [Ng2GoogleChartsModule],
  templateUrl: "./google-pie-chart3.html",
  styleUrl: "./google-pie-chart3.scss",
})
export class GooglePieChart3 {
  public pieChart3 = chartData.pieChart3;
}
