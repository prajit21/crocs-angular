import { Component } from "@angular/core";

import { checkbox } from "../../../../../shared/data/form-controls/checkbox-radio";

@Component({
  selector: "app-default-checkbox",
  imports: [],
  templateUrl: "./default-checkbox.html",
  styleUrl: "./default-checkbox.scss",
})
export class DefaultCheckbox {
  public checkboxData = checkbox;
}
