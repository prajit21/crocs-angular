import { Component } from "@angular/core";

import { NgApexchartsModule } from "ng-apexcharts";

import { growthChart } from "../../../../shared/data/dashboard/default/default-chart";
import { ClickOutsideDirective } from "../../../../shared/directive/outside.directive";

@Component({
  selector: "app-our-growth",
  imports: [NgApexchartsModule, ClickOutsideDirective],
  templateUrl: "./our-growth.html",
  styleUrl: "./our-growth.scss",
})
export class OurGrowth {
  public growthChart = growthChart;

  public isOpen: boolean = false;
}
