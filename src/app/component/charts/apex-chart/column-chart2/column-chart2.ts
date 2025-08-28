import { Component } from "@angular/core";

import { NgApexchartsModule } from "ng-apexcharts";

import * as chartData from "../../../../shared/data/charts/apex-chart";

@Component({
  selector: "app-column-chart2",
  imports: [NgApexchartsModule],
  templateUrl: "./column-chart2.html",
  styleUrl: "./column-chart2.scss",
})
export class ColumnChart2 {
  public columnChart2 = chartData.columnChart2;
}
