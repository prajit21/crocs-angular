import { Component } from "@angular/core";

import { ChartjsBarChart } from "./chartjs-bar-chart/chartjs-bar-chart";
import { ChartjsLineChart } from "./chartjs-line-chart/chartjs-line-chart";
import { ChartjsLineGraph } from "./chartjs-line-graph/chartjs-line-graph";
import { ChartjsRadarGraph } from "./chartjs-radar-graph/chartjs-radar-graph";
import { DoughnutChart } from "./doughnut-chart/doughnut-chart";
import { PolarChart } from "./polar-chart/polar-chart";

@Component({
  selector: "app-chartjs-chart",
  imports: [
    ChartjsBarChart,
    ChartjsLineChart,
    ChartjsLineGraph,
    ChartjsRadarGraph,
    DoughnutChart,
    PolarChart,
  ],
  templateUrl: "./chartjs-chart.html",
  styleUrl: "./chartjs-chart.scss",
})
export class ChartjsChart {}
