import { Component } from "@angular/core";

import { ChartistModule } from "ng-chartist";

import * as chartData from "../../../../shared/data/charts/chartist-chart";

@Component({
  selector: "app-donut-svg-animate",
  imports: [ChartistModule],
  templateUrl: "./donut-svg-animate.html",
  styleUrl: "./donut-svg-animate.scss",
})
export class DonutSvgAnimate {
  public chart3 = chartData.chart3;
}
