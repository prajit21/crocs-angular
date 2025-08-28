import { Component } from "@angular/core";

import { NgApexchartsModule } from "ng-apexcharts";

import { Turnover } from "../../../../shared/data/widgets/chart";

@Component({
  selector: "app-turn-over",
  imports: [NgApexchartsModule],
  templateUrl: "./turn-over.html",
  styleUrl: "./turn-over.scss",
})
export class TurnOver {
  public TrunOverChart = Turnover;
}
