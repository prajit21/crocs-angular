import { Component } from "@angular/core";

import { NgApexchartsModule } from "ng-apexcharts";

import { TopCategoriesChart } from "../../../../shared/data/dashboard/ecommerce/ecommerce-chart";
import { ClickOutsideDirective } from "../../../../shared/directive/outside.directive";

@Component({
  selector: "app-top-categories",
  imports: [NgApexchartsModule, ClickOutsideDirective],
  templateUrl: "./top-categories.html",
  styleUrl: "./top-categories.scss",
})
export class TopCategories {
  public TopCategoriesChart = TopCategoriesChart;
  public isOpen: boolean = false;

  open() {
    this.isOpen = !this.isOpen;
  }

  clickOutside(): void {
    this.isOpen = false;
  }
}
