import { Component } from "@angular/core";

import { CommonButtonGroups } from "../../../../shared/data/buttons/button-group";

@Component({
  selector: "app-common-button-group",
  imports: [],
  templateUrl: "./common-button-group.html",
  styleUrl: "./common-button-group.scss",
})
export class CommonButtonGroup {
  public commonData = CommonButtonGroups;
}
