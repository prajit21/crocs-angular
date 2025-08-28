import { Component } from "@angular/core";

import { NgApexchartsModule } from "ng-apexcharts";

import {
  ProductValuationChart,
  ProductValuation2,
} from "../../../../shared/data/dashboard/default/default-chart";
import { ClickOutsideDirective } from "../../../../shared/directive/outside.directive";

@Component({
  selector: "app-product-valuation",
  imports: [NgApexchartsModule, ClickOutsideDirective],
  templateUrl: "./product-valuation.html",
  styleUrl: "./product-valuation.scss",
})
export class ProductValuation {
  public productValuationData = ProductValuationChart;
  public productValuationData2 = ProductValuation2;
  public isOpen: boolean = false;
}
