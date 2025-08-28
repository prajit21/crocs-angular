import { Component } from "@angular/core";

import { NgApexchartsModule } from "ng-apexcharts";

import { DailyVisitor } from "../../../../shared/data/dashboard/ecommerce/ecommerce-chart";
import { ClickOutsideDirective } from "../../../../shared/directive/outside.directive";

@Component({
  selector: "app-daily-visitors",
  imports: [NgApexchartsModule, ClickOutsideDirective],
  templateUrl: "./daily-visitors.html",
  styleUrl: "./daily-visitors.scss",
})
export class DailyVisitors {
  public DailyVistorsChart = DailyVisitor;
  public isOpen: boolean = false;

  open() {
    this.isOpen = !this.isOpen;
  }

  clickOutside(): void {
    this.isOpen = false;
  }
}
