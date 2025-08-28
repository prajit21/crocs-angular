import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

import { checkbox } from "../../../../../shared/data/form-controls/checkbox-radio";

@Component({
  selector: "app-default-checkbox",
  imports: [CommonModule],
  templateUrl: "./default-checkbox.html",
  styleUrl: "./default-checkbox.scss",
})
export class DefaultCheckbox {
  public checkboxData = checkbox;
}
