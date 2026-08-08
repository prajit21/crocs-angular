import { Component, ChangeDetectionStrategy } from "@angular/core";

import { Feathericon } from "../../../shared/component/feathericon/feathericon";
import { ClickOutsideDirective } from "../../../shared/directive/outside.directive";

@Component({
  selector: "app-todo-filter",
  imports: [Feathericon, ClickOutsideDirective],
  templateUrl: "./todo-filter.html",
  changeDetection: ChangeDetectionStrategy.Eager,
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
