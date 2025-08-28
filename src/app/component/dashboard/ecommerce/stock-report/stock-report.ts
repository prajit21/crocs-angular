import { Component } from "@angular/core";

import { NgApexchartsModule } from "ng-apexcharts";

import { StockReports } from "../../../../shared/data/dashboard/ecommerce/ecommerce-chart";
import { ClickOutsideDirective } from "../../../../shared/directive/outside.directive";

@Component({
  selector: "app-stock-report",
  imports: [NgApexchartsModule, ClickOutsideDirective],
  templateUrl: "./stock-report.html",
  styleUrl: "./stock-report.scss",
})
export class StockReport {
  public StockReportChart = StockReports;
  public isOpen: boolean = false;

  open() {
    this.isOpen = !this.isOpen;
  }

  clickOutside(): void {
    this.isOpen = false;
  }
}
