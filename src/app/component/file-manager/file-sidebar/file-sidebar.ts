import { Component } from "@angular/core";

import { Feathericon } from "../../../shared/component/feathericon/feathericon";
import { ClickOutsideDirective } from "../../../shared/directive/outside.directive";

@Component({
  selector: "app-file-sidebar",
  imports: [Feathericon, ClickOutsideDirective],
  templateUrl: "./file-sidebar.html",
  styleUrl: "./file-sidebar.scss",
})
export class FileSidebar {
  public open: boolean = false;

  openFilter() {
    this.open = !this.open;
  }

  clickOutside(): void {
    this.open = false;
  }
}
