import { Component } from "@angular/core";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import * as Data from "../../../../shared/data/ui-kits/dropdown";

@Component({
  selector: "app-split-dropdown",
  imports: [NgbModule],
  templateUrl: "./split-dropdown.html",
  styleUrl: "./split-dropdown.scss",
})
export class SplitDropdown {
  public splitDropdownData = Data.SplitDropdown;
}
