import { Component, ChangeDetectionStrategy } from "@angular/core";

import { NgApexchartsModule } from "ng-apexcharts";

import { OrderStatusChart } from "../../../../shared/data/widgets/chart";

@Component({
  selector: "app-order-status",
  imports: [NgApexchartsModule],
  templateUrl: "./order-status.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./order-status.scss",
})
export class OrderStatus {
  public OrderStatusChart = OrderStatusChart;
}
