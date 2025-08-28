import { Component } from "@angular/core";

import { Ng2GoogleChartsModule } from "ng2-google-charts";

import * as chartData from "../../../../shared/data/charts/google-chart";

@Component({
  selector: "app-area-chart2",
  imports: [Ng2GoogleChartsModule],
  templateUrl: "./area-chart2.html",
  styleUrl: "./area-chart2.scss",
})
export class AreaChart2 {
  public areaChart2 = chartData.areaChart2;
}
