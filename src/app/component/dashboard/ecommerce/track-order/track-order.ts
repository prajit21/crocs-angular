import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

import { TrackOrders } from "../../../../shared/data/dashboard/ecommerce/ecommerce";
import { ClickOutsideDirective } from "../../../../shared/directive/outside.directive";

@Component({
  selector: "app-track-order",
  imports: [ClickOutsideDirective, RouterModule],
  templateUrl: "./track-order.html",
  styleUrl: "./track-order.scss",
})
export class TrackOrder {
  public TrackOrderData = TrackOrders;
  public isOpen: boolean = false;

  open() {
    this.isOpen = !this.isOpen;
  }

  clickOutside(): void {
    this.isOpen = false;
  }
}
