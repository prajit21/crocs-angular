import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

import { NgApexchartsModule } from "ng-apexcharts";

import { productSalesChart } from "../../../../shared/data/widgets/general.chart";
import { ClickOutsideDirective } from "../../../../shared/directive/outside.directive";

@Component({
  selector: "app-general-product-sales",
  imports: [CommonModule, NgApexchartsModule, ClickOutsideDirective],
  templateUrl: "./general-product-sales.html",
  styleUrl: "./general-product-sales.scss",
})
export class GeneralProductSales {
  public SalesChart = productSalesChart;
  public isOpen: boolean = false;

  open() {
    this.isOpen = !this.isOpen;
  }

  clickOutside(): void {
    this.isOpen = false;
  }
}
