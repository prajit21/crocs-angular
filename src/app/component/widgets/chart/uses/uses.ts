import { Component, ChangeDetectionStrategy } from "@angular/core";

import { NgApexchartsModule } from "ng-apexcharts";

import { usesChart } from "../../../../shared/data/widgets/chart";

@Component({
  selector: "app-uses",
  imports: [NgApexchartsModule],
  templateUrl: "./uses.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./uses.scss",
})
export class Uses {
  public usesChart = usesChart;
}
