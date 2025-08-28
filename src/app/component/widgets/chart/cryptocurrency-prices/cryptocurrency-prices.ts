import { Component } from "@angular/core";

import { NgApexchartsModule } from "ng-apexcharts";

import { CryptocurrencyPricesChart } from "../../../../shared/data/widgets/chart";

@Component({
  selector: "app-cryptocurrency-prices",
  imports: [NgApexchartsModule],
  templateUrl: "./cryptocurrency-prices.html",
  styleUrl: "./cryptocurrency-prices.scss",
})
export class CryptocurrencyPrices {
  public CryptocurrencyPriceChart = CryptocurrencyPricesChart;
}
