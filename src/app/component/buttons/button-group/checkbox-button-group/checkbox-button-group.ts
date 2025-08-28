import { Component } from "@angular/core";

import { checkboxData } from "../../../../shared/data/buttons/button-group";

@Component({
  selector: "app-checkbox-button-group",
  imports: [],
  templateUrl: "./checkbox-button-group.html",
  styleUrl: "./checkbox-button-group.scss",
})
export class CheckboxButtonGroup {
  public checkBox = checkboxData;
}
