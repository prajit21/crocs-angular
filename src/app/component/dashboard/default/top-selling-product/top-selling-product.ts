import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

import { TopSellingProducts } from "../../../../shared/data/dashboard/default/default";
import { ClickOutsideDirective } from "../../../../shared/directive/outside.directive";

@Component({
  selector: "app-top-selling-product",
  imports: [ClickOutsideDirective, RouterModule],
  templateUrl: "./top-selling-product.html",
  styleUrl: "./top-selling-product.scss",
})
export class TopSellingProduct {
  public TopSellingProduct = TopSellingProducts;
  public isOpen: boolean = false;
}
