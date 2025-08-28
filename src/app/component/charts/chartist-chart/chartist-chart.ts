import { Component } from "@angular/core";

import { AdvancedSmilAnimations } from "./advanced-smil-animations/advanced-smil-animations";
import { BiPolarBarChart } from "./bi-polar-bar-chart/bi-polar-bar-chart";
import { BiPolarLineChart } from "./bi-polar-line-chart/bi-polar-line-chart";
import { DonutSvgAnimate } from "./donut-svg-animate/donut-svg-animate";
import { ExtremeResponsiveConfiguration } from "./extreme-responsive-configuration/extreme-responsive-configuration";
import { FilledHolesData } from "./filled-holes-data/filled-holes-data";
import { HolesData } from "./holes-data/holes-data";
import { HorizontalBarChart } from "./horizontal-bar-chart/horizontal-bar-chart";
import { LineChartArea } from "./line-chart-area/line-chart-area";
import { SimpleLineChart } from "./simple-line-chart/simple-line-chart";
import { StackedBarChart } from "./stacked-bar-chart/stacked-bar-chart";
import { SvgPathAnimations } from "./svg-path-animations/svg-path-animations";

@Component({
  selector: "app-chartist-chart",
  imports: [
    AdvancedSmilAnimations,
    SvgPathAnimations,
    DonutSvgAnimate,
    BiPolarLineChart,
    LineChartArea,
    BiPolarBarChart,
    StackedBarChart,
    HorizontalBarChart,
    ExtremeResponsiveConfiguration,
    SimpleLineChart,
    HolesData,
    FilledHolesData,
  ],
  templateUrl: "./chartist-chart.html",
  styleUrl: "./chartist-chart.scss",
})
export class ChartistChart {}
