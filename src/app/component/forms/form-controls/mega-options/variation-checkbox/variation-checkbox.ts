import { Component, ChangeDetectionStrategy } from "@angular/core";
import { FormsModule } from "@angular/forms";

import {
  checkBox,
  themeSales,
} from "../../../../../shared/data/form-controls/mega-options";

@Component({
  selector: "app-variation-checkbox",
  imports: [FormsModule],
  templateUrl: "./variation-checkbox.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./variation-checkbox.scss",
})
export class VariationCheckbox {
  public checkboxData = checkBox;
  public themeData = themeSales;
}
