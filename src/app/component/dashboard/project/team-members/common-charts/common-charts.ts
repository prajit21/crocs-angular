import { Component, input, ChangeDetectionStrategy } from "@angular/core";

import { NgApexchartsModule } from "ng-apexcharts";

import { CommonWidget } from "../../../../../shared/data/dashboard/project/project-chart";

@Component({
  selector: "app-common-charts",
  imports: [NgApexchartsModule],
  templateUrl: "./common-charts.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./common-charts.scss",
})
export class CommonCharts {
  readonly data = input<CommonWidget>();
}
