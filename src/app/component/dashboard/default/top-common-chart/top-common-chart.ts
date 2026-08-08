import { Component, input, ChangeDetectionStrategy } from "@angular/core";

import { NgApexchartsModule } from "ng-apexcharts";

import { TotalEarningsChart } from "../../../../shared/data/dashboard/default/default-chart";
import { ClickOutsideDirective } from "../../../../shared/directive/outside.directive";

@Component({
  selector: "app-top-common-chart",
  imports: [NgApexchartsModule, ClickOutsideDirective],
  templateUrl: "./top-common-chart.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./top-common-chart.scss",
})
export class TopCommonChart {
  readonly data = input<TotalEarningsChart>();

  public isOpen: boolean = false;
}
