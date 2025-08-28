import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

import {
  checkBox,
  themeSales,
} from "../../../../../shared/data/form-controls/mega-options";

@Component({
  selector: "app-variation-checkbox",
  imports: [CommonModule, FormsModule],
  templateUrl: "./variation-checkbox.html",
  styleUrl: "./variation-checkbox.scss",
})
export class VariationCheckbox {
  public checkboxData = checkBox;
  public themeData = themeSales;
}
