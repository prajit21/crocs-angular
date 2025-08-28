import { Component } from "@angular/core";

import { ChartistModule } from "ng-chartist";

import * as chartData from "../../../../shared/data/charts/chartist-chart";

@Component({
  selector: "app-svg-path-animations",
  imports: [ChartistModule],
  templateUrl: "./svg-path-animations.html",
  styleUrl: "./svg-path-animations.scss",
})
export class SvgPathAnimations {
  public chart2 = chartData.chart2;
}
