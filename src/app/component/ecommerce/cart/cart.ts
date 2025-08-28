import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

import { Feathericon } from "../../../shared/component/feathericon/feathericon";
import { cartItem } from "../../../shared/data/ecommerce/cart";

@Component({
  selector: "app-cart",
  imports: [Feathericon, RouterModule],
  templateUrl: "./cart.html",
  styleUrl: "./cart.scss",
})
export class Cart {
  public cartData = cartItem;

  decrement(id: number) {
    if (this.cartData[id - 1].counter > 1) {
      this.cartData[id - 1].counter -= 1;
    }
  }

  increment(id: number) {
    this.cartData[id - 1].counter += 1;
  }
}
