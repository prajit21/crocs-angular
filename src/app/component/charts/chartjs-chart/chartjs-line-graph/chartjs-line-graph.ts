import { Component } from "@angular/core";

import { BaseChartDirective } from "ng2-charts";

import * as chartData from "../../../../shared/data/charts/chartjs";

@Component({
  selector: "app-chartjs-line-graph",
  imports: [BaseChartDirective],
  templateUrl: "./chartjs-line-graph.html",
  styleUrl: "./chartjs-line-graph.scss",
})
export class ChartjsLineGraph {
  public lineGraphOptions = chartData.lineGraphOptions;
  public lineGraphLabels = chartData.lineGraphLabels;
  public lineGraphType = chartData.lineGraphType;
  public lineGraphLegend = chartData.lineGraphLegend;
  public lineGraphData = chartData.lineGraphData;
}
