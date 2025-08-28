import { Component } from "@angular/core";

import { Ng2GoogleChartsModule } from "ng2-google-charts";

import * as chartData from "../../../../shared/data/charts/google-chart";

@Component({
  selector: "app-google-pie-chart1",
  imports: [Ng2GoogleChartsModule],
  templateUrl: "./google-pie-chart1.html",
  styleUrl: "./google-pie-chart1.scss",
})
export class GooglePieChart1 {
  public pieChart1 = chartData.pieChart1;
}
