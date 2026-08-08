import { Component, ChangeDetectionStrategy } from "@angular/core";

import { radioButton } from "../../../../shared/data/buttons/button-group";

@Component({
  selector: "app-radio-button-group",
  imports: [],
  templateUrl: "./radio-button-group.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./radio-button-group.scss",
})
export class RadioButtonGroup {
  public radiobuttonData = radioButton;
}
