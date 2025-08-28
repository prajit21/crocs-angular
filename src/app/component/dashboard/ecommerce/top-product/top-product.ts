import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

import { TopProducts } from "../../../../shared/data/dashboard/ecommerce/ecommerce";
import { ClickOutsideDirective } from "../../../../shared/directive/outside.directive";

@Component({
  selector: "app-top-product",
  imports: [ClickOutsideDirective, RouterModule],
  templateUrl: "./top-product.html",
  styleUrl: "./top-product.scss",
})
export class TopProduct {
  public TopProductData = TopProducts;

  public isOpen: boolean = false;

  open() {
    this.isOpen = !this.isOpen;
  }

  clickOutside(): void {
    this.isOpen = false;
  }
}
