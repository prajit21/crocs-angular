import { Component } from "@angular/core";

import { NgApexchartsModule } from "ng-apexcharts";

import { SalesOverviewChart } from "../../../../shared/data/widgets/chart";

@Component({
  selector: "app-sales-overview",
  imports: [NgApexchartsModule],
  templateUrl: "./sales-overview.html",
  styleUrl: "./sales-overview.scss",
})
export class SalesOverview {
  public salesOverviewChart = SalesOverviewChart;
}
