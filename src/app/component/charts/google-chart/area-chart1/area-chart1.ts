import { Component } from "@angular/core";

import { Ng2GoogleChartsModule } from "ng2-google-charts";

import * as chartData from "../../../../shared/data/charts/google-chart";

@Component({
  selector: "app-area-chart1",
  imports: [Ng2GoogleChartsModule],
  templateUrl: "./area-chart1.html",
  styleUrl: "./area-chart1.scss",
})
export class AreaChart1 {
  public areaChart1 = chartData.areaChart1;
}
