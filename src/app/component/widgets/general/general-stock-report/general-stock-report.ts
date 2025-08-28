import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

import { NgApexchartsModule } from "ng-apexcharts";

import { stockReportChart } from "../../../../shared/data/widgets/general.chart";
import { ClickOutsideDirective } from "../../../../shared/directive/outside.directive";

@Component({
  selector: "app-general-stock-report",
  imports: [CommonModule, NgApexchartsModule, ClickOutsideDirective],
  templateUrl: "./general-stock-report.html",
  styleUrl: "./general-stock-report.scss",
})
export class GeneralStockReport {
  public StockReportChart = stockReportChart;
  public isOpen: boolean = false;

  open() {
    this.isOpen = !this.isOpen;
  }

  clickOutside(): void {
    this.isOpen = false;
  }
}
