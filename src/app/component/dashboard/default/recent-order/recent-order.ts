import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

import { recentorder } from "../../../../shared/data/dashboard/default/default";
import { ClickOutsideDirective } from "../../../../shared/directive/outside.directive";

@Component({
  selector: "app-recent-order",
  imports: [ClickOutsideDirective, RouterModule],
  templateUrl: "./recent-order.html",
  styleUrl: "./recent-order.scss",
})
export class RecentOrder {
  public recentOrderData = recentorder;
  public isOpen: boolean = false;
}
