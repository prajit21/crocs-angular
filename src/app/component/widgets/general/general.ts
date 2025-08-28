import { Component } from "@angular/core";

import { GeneralDailyVisitos } from "./general-daily-visitos/general-daily-visitos";
import { GeneralProductSales } from "./general-product-sales/general-product-sales";
import { GeneralStockReport } from "./general-stock-report/general-stock-report";
import {
  TotalEarnings,
  TotalExpenses,
} from "../../../shared/data/dashboard/default/default-chart";
import {
  TotalRevenue,
  TotalSales,
  TotalCustomer,
  TotalProduct,
} from "../../../shared/data/dashboard/ecommerce/ecommerce-chart";
import {
  projectDetails1,
  projectDetails2,
  projectDetails3,
} from "../../../shared/data/dashboard/project/project";
import { TopCommonChart } from "../../dashboard/default/top-common-chart/top-common-chart";
import { TransactionHistory } from "../../dashboard/default/transaction-history/transaction-history";
import { TopCommonEcommerce } from "../../dashboard/ecommerce/top-common-ecommerce/top-common-ecommerce";
import { TrackOrder } from "../../dashboard/ecommerce/track-order/track-order";
import { ProjectDeliveries } from "../../dashboard/project/project-deliveries/project-deliveries";
import { ProjectDetails } from "../../dashboard/project/project-details/project-details";

@Component({
  selector: "app-general",
  imports: [
    ProjectDetails,
    GeneralDailyVisitos,
    TopCommonChart,
    TransactionHistory,
    GeneralProductSales,
    TopCommonEcommerce,
    ProjectDeliveries,
    GeneralStockReport,
    TrackOrder,
  ],
  templateUrl: "./general.html",
  styleUrl: "./general.scss",
})
export class General {
  public projectData1 = projectDetails1;
  public ProjectData2 = projectDetails2;
  public ProjectData3 = projectDetails3;
  public TotalEarningsData = TotalEarnings;
  public TotalExpensesData = TotalExpenses;
  public TotalRevenueData = TotalRevenue;
  public TotalSalesData = TotalSales;
  public TotalCustomerData = TotalCustomer;
  public TotalProductData = TotalProduct;
}
