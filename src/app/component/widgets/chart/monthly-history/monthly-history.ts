import { Component } from "@angular/core";

import { NgApexchartsModule } from "ng-apexcharts";

import { MonthlyHistoryChart } from "../../../../shared/data/widgets/chart";

@Component({
  selector: "app-monthly-history",
  imports: [NgApexchartsModule],
  templateUrl: "./monthly-history.html",
  styleUrl: "./monthly-history.scss",
})
export class MonthlyHistory {
  public MonthlyHistoryChart = MonthlyHistoryChart;
}
