import { Component, input, ChangeDetectionStrategy } from "@angular/core";

import { NgApexchartsModule } from "ng-apexcharts";

import { TotalRevenueChart } from "../../../../shared/data/dashboard/ecommerce/ecommerce-chart";

@Component({
  selector: "app-top-common-ecommerce",
  imports: [NgApexchartsModule],
  templateUrl: "./top-common-ecommerce.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./top-common-ecommerce.scss",
})
export class TopCommonEcommerce {
  readonly data = input<TotalRevenueChart>();
}
