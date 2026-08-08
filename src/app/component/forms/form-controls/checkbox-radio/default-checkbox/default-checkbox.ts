import { Component, ChangeDetectionStrategy } from "@angular/core";

import { checkbox } from "../../../../../shared/data/form-controls/checkbox-radio";

@Component({
  selector: "app-default-checkbox",
  imports: [],
  templateUrl: "./default-checkbox.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./default-checkbox.scss",
})
export class DefaultCheckbox {
  public checkboxData = checkbox;
}
