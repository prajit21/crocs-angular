import { Component } from "@angular/core";

import { DailyVisitors } from "./daily-visitors/daily-visitors";
import { ManageOrder } from "./manage-order/manage-order";
import { OpenInvoices } from "./open-invoices/open-invoices";
import { ProductSales } from "./product-sales/product-sales";
import { StockReport } from "./stock-report/stock-report";
import { TopCategories } from "./top-categories/top-categories";
import { TopCommonEcommerce } from "./top-common-ecommerce/top-common-ecommerce";
import { TopProduct } from "./top-product/top-product";
import { TrackOrder } from "./track-order/track-order";
import {
  TotalRevenue,
  TotalSales,
  TotalCustomer,
  TotalProduct,
} from "../../../shared/data/dashboard/ecommerce/ecommerce-chart";

@Component({
  selector: "app-ecommerce",
  imports: [
    TopCommonEcommerce,
    DailyVisitors,
    OpenInvoices,
    TopCategories,
    TopProduct,
    TrackOrder,
    ProductSales,
    ManageOrder,
    StockReport,
  ],
  templateUrl: "./ecommerce.html",
  styleUrl: "./ecommerce.scss",
})
export class Ecommerce {
  public TotalRevenueData = TotalRevenue;
  public TotalSalesData = TotalSales;
  public TotalCustomerData = TotalCustomer;
  public TotalProductData = TotalProduct;
}
