import { Component, inject } from "@angular/core";
import { RouterModule } from "@angular/router";

import { NgbModule, NgbRatingConfig } from "@ng-bootstrap/ng-bootstrap";

import { wishlist } from "../../../shared/data/ecommerce/wishlist";

@Component({
  selector: "app-wishlist",
  imports: [NgbModule, RouterModule],
  templateUrl: "./wishlist.html",
  styleUrl: "./wishlist.scss",
})
export class Wishlist {
  config = inject(NgbRatingConfig);

  public WishistData = wishlist;

  constructor() {
    const config = this.config;

    config.max = 5;
    config.readonly = true;
  }
}
