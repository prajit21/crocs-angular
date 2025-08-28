import { Component } from "@angular/core";

import { Feathericon } from "../../../shared/component/feathericon/feathericon";
import { ClickOutsideDirective } from "../../../shared/directive/outside.directive";

@Component({
  selector: "app-todo-filter",
  imports: [Feathericon, ClickOutsideDirective],
  templateUrl: "./todo-filter.html",
  styleUrl: "./todo-filter.scss",
})
export class TodoFilter {
  public isOpen: boolean = false;

  openFilter() {
    this.isOpen = !this.isOpen;
  }

  clickOutside(): void {
    this.isOpen = false;
  }
}
