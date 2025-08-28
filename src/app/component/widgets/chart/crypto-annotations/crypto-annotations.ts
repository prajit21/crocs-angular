import { Component } from "@angular/core";

import { NgApexchartsModule } from "ng-apexcharts";

import { CryptoAnnotationsChart } from "../../../../shared/data/widgets/chart";

@Component({
  selector: "app-crypto-annotations",
  imports: [NgApexchartsModule],
  templateUrl: "./crypto-annotations.html",
  styleUrl: "./crypto-annotations.scss",
})
export class CryptoAnnotations {
  public CryptoAnnotationChart = CryptoAnnotationsChart;
}
