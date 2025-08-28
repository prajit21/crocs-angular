import { Component } from "@angular/core";

import { ChartistModule } from "ng-chartist";

import * as chartData from "../../../../shared/data/charts/chartist-chart";

@Component({
  selector: "app-filled-holes-data",
  imports: [ChartistModule],
  templateUrl: "./filled-holes-data.html",
  styleUrl: "./filled-holes-data.scss",
})
export class FilledHolesData {
  public chart12 = chartData.chart12;
}
