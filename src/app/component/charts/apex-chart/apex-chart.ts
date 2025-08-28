import { Component } from "@angular/core";

import { ApexBarChart } from "./apex-bar-chart/apex-bar-chart";
import { AreaSpalineChart } from "./area-spaline-chart/area-spaline-chart";
import { BasicAreaChart } from "./basic-area-chart/basic-area-chart";
import { BubbleChart } from "./bubble-chart/bubble-chart";
import { CandlestickChart } from "./candlestick-chart/candlestick-chart";
import { ColumnChart } from "./column-chart/column-chart";
import { ColumnChart2 } from "./column-chart2/column-chart2";
import { DonutChart } from "./donut-chart/donut-chart";
import { MixedChart } from "./mixed-chart/mixed-chart";
import { PieChart } from "./pie-chart/pie-chart";
import { RadarChart } from "./radar-chart/radar-chart";
import { RadialBarChart } from "./radial-bar-chart/radial-bar-chart";
import { SteplineChart } from "./stepline-chart/stepline-chart";

@Component({
  selector: "app-apex-chart",
  imports: [
    BasicAreaChart,
    AreaSpalineChart,
    ApexBarChart,
    ColumnChart,
    BubbleChart,
    SteplineChart,
    ColumnChart2,
    PieChart,
    DonutChart,
    MixedChart,
    CandlestickChart,
    RadarChart,
    RadialBarChart,
  ],
  templateUrl: "./apex-chart.html",
  styleUrl: "./apex-chart.scss",
})
export class ApexChart {}
