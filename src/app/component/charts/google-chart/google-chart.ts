import { Component } from "@angular/core";

import { AreaChart1 } from "./area-chart1/area-chart1";
import { AreaChart2 } from "./area-chart2/area-chart2";
import { ComboChart } from "./combo-chart/combo-chart";
import { GoogleBarChart } from "./google-bar-chart/google-bar-chart";
import { GoogleColumnChart1 } from "./google-column-chart1/google-column-chart1";
import { GoogleColumnChart2 } from "./google-column-chart2/google-column-chart2";
import { GooglePieChart1 } from "./google-pie-chart1/google-pie-chart1";
import { GooglePieChart2 } from "./google-pie-chart2/google-pie-chart2";
import { GooglePieChart3 } from "./google-pie-chart3/google-pie-chart3";
import { GooglePieChart4 } from "./google-pie-chart4/google-pie-chart4";
import { LineChart } from "./line-chart/line-chart";

@Component({
  selector: "app-google-chart",
  imports: [
    AreaChart1,
    AreaChart2,
    GoogleColumnChart1,
    GoogleColumnChart2,
    LineChart,
    ComboChart,
    GoogleBarChart,
    GooglePieChart1,
    GooglePieChart2,
    GooglePieChart3,
    GooglePieChart4,
  ],
  templateUrl: "./google-chart.html",
  styleUrl: "./google-chart.scss",
})
export class GoogleChart {}
