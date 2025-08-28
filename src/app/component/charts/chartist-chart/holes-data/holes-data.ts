import { Component } from "@angular/core";

import { ChartistModule } from "ng-chartist";

import * as chartData from "../../../../shared/data/charts/chartist-chart";

@Component({
  selector: "app-holes-data",
  imports: [ChartistModule],
  templateUrl: "./holes-data.html",
  styleUrl: "./holes-data.scss",
})
export class HolesData {
  public chart11 = chartData.chart11;
}
