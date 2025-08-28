import { Component } from "@angular/core";

import { NgApexchartsModule } from "ng-apexcharts";

import { FinanceChart } from "../../../../shared/data/widgets/chart";

@Component({
  selector: "app-finance",
  imports: [NgApexchartsModule],
  templateUrl: "./finance.html",
  styleUrl: "./finance.scss",
})
export class Finance {
  public FinancesChart = FinanceChart;
}
