import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

import { mangeOrder } from "../../../../shared/data/dashboard/ecommerce/ecommerce";
import { ClickOutsideDirective } from "../../../../shared/directive/outside.directive";

@Component({
  selector: "app-manage-order",
  imports: [ClickOutsideDirective, RouterModule],
  templateUrl: "./manage-order.html",
  styleUrl: "./manage-order.scss",
})
export class ManageOrder {
  public MangeOrder = mangeOrder;

  public isOpen: boolean = false;

  open() {
    this.isOpen = !this.isOpen;
  }

  clickOutside(): void {
    this.isOpen = false;
  }
}
