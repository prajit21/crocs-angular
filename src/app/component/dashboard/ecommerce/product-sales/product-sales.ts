import { Component } from "@angular/core";

import { NgApexchartsModule } from "ng-apexcharts";

import { productSalesChart } from "../../../../shared/data/dashboard/ecommerce/ecommerce-chart";
import { ClickOutsideDirective } from "../../../../shared/directive/outside.directive";

@Component({
  selector: "app-product-sales",
  imports: [NgApexchartsModule, ClickOutsideDirective],
  templateUrl: "./product-sales.html",
  styleUrl: "./product-sales.scss",
})
export class ProductSales {
  public productSalesChart = productSalesChart;
  public isOpen: boolean = false;

  open() {
    this.isOpen = !this.isOpen;
  }

  clickOutside(): void {
    this.isOpen = false;
  }
}
