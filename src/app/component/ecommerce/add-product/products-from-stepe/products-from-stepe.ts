import { Component, input } from "@angular/core";

import { staps } from "../../../../shared/data/ecommerce/add-product";

@Component({
  selector: "app-products-from-stepe",
  imports: [],
  templateUrl: "./products-from-stepe.html",
  styleUrl: "./products-from-stepe.scss",
})
export class ProductsFromStepe {
  readonly stepsData = input.required<staps[]>();
  readonly activeSteps = input.required<number>();

  ngOnChanges() {
    this.stepsData().forEach((data) => {
      if (data.stepNumber < this.activeSteps()) {
        data.active = true;
      } else {
        data.active = false;
      }
    });
  }
}
