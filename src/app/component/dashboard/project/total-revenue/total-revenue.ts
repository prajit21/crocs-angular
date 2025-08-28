import { Component } from "@angular/core";

import { NgApexchartsModule } from "ng-apexcharts";

import {
  TotalRevenueProject,
  monthlyChart,
} from "../../../../shared/data/dashboard/project/project-chart";
import { ClickOutsideDirective } from "../../../../shared/directive/outside.directive";

@Component({
  selector: "app-total-revenue",
  imports: [NgApexchartsModule, ClickOutsideDirective],
  templateUrl: "./total-revenue.html",
  styleUrl: "./total-revenue.scss",
})
export class TotalRevenue {
  public TotalProjectRevenue = TotalRevenueProject;
  public monthlyChart = monthlyChart;

  public isOpen: boolean = false;

  open() {
    this.isOpen = !this.isOpen;
  }
}
