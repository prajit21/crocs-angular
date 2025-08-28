import { Component } from "@angular/core";

import { Ng2GoogleChartsModule } from "ng2-google-charts";

import * as chartData from "../../../../shared/data/charts/google-chart";

@Component({
  selector: "app-google-pie-chart2",
  imports: [Ng2GoogleChartsModule],
  templateUrl: "./google-pie-chart2.html",
  styleUrl: "./google-pie-chart2.scss",
})
export class GooglePieChart2 {
  public pieChart2 = chartData.pieChart2;
}
