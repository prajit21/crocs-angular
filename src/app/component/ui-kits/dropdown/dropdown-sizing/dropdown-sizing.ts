import { Component } from "@angular/core";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import * as Data from "../../../../shared/data/ui-kits/dropdown";

@Component({
  selector: "app-dropdown-sizing",
  imports: [NgbModule],
  templateUrl: "./dropdown-sizing.html",
  styleUrl: "./dropdown-sizing.scss",
})
export class DropdownSizing {
  public sizingdropdownData = Data.DropdownSizing;
}
