import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

import { NgApexchartsModule } from "ng-apexcharts";

import { dailyVisitorChart } from "../../../../shared/data/widgets/general.chart";
import { ClickOutsideDirective } from "../../../../shared/directive/outside.directive";

@Component({
  selector: "app-general-daily-visitos",
  imports: [CommonModule, NgApexchartsModule, ClickOutsideDirective],
  templateUrl: "./general-daily-visitos.html",
  styleUrl: "./general-daily-visitos.scss",
})
export class GeneralDailyVisitos {
  public visitosChart = dailyVisitorChart;
  public isOpen: boolean = false;

  open() {
    this.isOpen = !this.isOpen;
  }

  clickOutside(): void {
    this.isOpen = false;
  }
}
