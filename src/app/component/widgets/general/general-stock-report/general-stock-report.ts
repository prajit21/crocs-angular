import { Component, ChangeDetectionStrategy } from "@angular/core";

import { NgApexchartsModule } from "ng-apexcharts";

import { stockReportChart } from "../../../../shared/data/widgets/general.chart";
import { ClickOutsideDirective } from "../../../../shared/directive/outside.directive";

@Component({
  selector: "app-general-stock-report",
  imports: [NgApexchartsModule, ClickOutsideDirective],
  templateUrl: "./general-stock-report.html",
  changeDetection: ChangeDetectionStrategy.Eager,
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
