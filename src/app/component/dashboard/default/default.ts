import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

import { Calendar } from "./calendar/calendar";
import { DashboardNotifications } from "./dashboard-notifications/dashboard-notifications";
import { OurGrowth } from "./our-growth/our-growth";
import { ProductValuation } from "./product-valuation/product-valuation";
import { RecentOrder } from "./recent-order/recent-order";
import { TopCommonChart } from "./top-common-chart/top-common-chart";
import { TopDefultCard } from "./top-defult-card/top-defult-card";
import { TopSellingProduct } from "./top-selling-product/top-selling-product";
import { TransactionHistory } from "./transaction-history/transaction-history";
import { UserByCountry } from "./user-by-country/user-by-country";
import {
  TotalEarnings,
  TotalExpenses,
} from "../../../shared/data/dashboard/default/default-chart";

@Component({
  selector: "app-default",
  imports: [
    CommonModule,
    TopDefultCard,
    TopCommonChart,
    TopSellingProduct,
    RecentOrder,
    OurGrowth,
    ProductValuation,
    TransactionHistory,
    Calendar,
    UserByCountry,
    DashboardNotifications,
  ],
  templateUrl: "./default.html",
  styleUrl: "./default.scss",
})
export class Default {
  public TotalEarningsData = TotalEarnings;
  public TotalExpensesData = TotalExpenses;
}
