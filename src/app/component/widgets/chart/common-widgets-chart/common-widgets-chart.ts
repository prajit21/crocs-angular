import { Component, input } from "@angular/core";

import { NgApexchartsModule } from "ng-apexcharts";

import { WidgetCharts } from "../../../../shared/data/widgets/chart";

@Component({
  selector: "app-common-widgets-chart",
  imports: [NgApexchartsModule],
  templateUrl: "./common-widgets-chart.html",
  styleUrl: "./common-widgets-chart.scss",
})
export class CommonWidgetsChart {
  readonly data = input<WidgetCharts>();
}
