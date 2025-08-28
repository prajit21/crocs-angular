import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { CommonWidgetsChart } from "./common-widgets-chart/common-widgets-chart";
import { CryptoAnnotations } from "./crypto-annotations/crypto-annotations";
import { CryptocurrencyPrices } from "./cryptocurrency-prices/cryptocurrency-prices";
import { Finance } from "./finance/finance";
import { LiveProducts } from "./live-products/live-products";
import { MonthlyHistory } from "./monthly-history/monthly-history";
import { MonthlySales } from "./monthly-sales/monthly-sales";
import { OrderStatus } from "./order-status/order-status";
import { ProjectCreated } from "./project-created/project-created";
import { SalesOverview } from "./sales-overview/sales-overview";
import { StockMarket } from "./stock-market/stock-market";
import { TurnOver } from "./turn-over/turn-over";
import { Uses } from "./uses/uses";
import {
  widgetChart,
  widgetChart2,
  widgetChart3,
} from "../../../shared/data/widgets/chart";

@Component({
  selector: "app-chart",
  imports: [
    CommonModule,
    NgbModule,
    CommonWidgetsChart,
    ProjectCreated,
    SalesOverview,
    MonthlyHistory,
    TurnOver,
    LiveProducts,
    CryptoAnnotations,
    CryptocurrencyPrices,
    StockMarket,
    Finance,
    MonthlySales,
    OrderStatus,
    Uses,
  ],
  templateUrl: "./chart.html",
  styleUrl: "./chart.scss",
})
export class Chart {
  public chart1 = widgetChart;
  public chart2 = widgetChart2;
  public chart3 = widgetChart3;
}
