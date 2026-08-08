import { Component, ChangeDetectionStrategy } from "@angular/core";

import { CommonOutlineButton } from "../../../../shared/data/buttons/button-group";

@Component({
  selector: "app-common-outline-button-group",
  imports: [],
  templateUrl: "./common-outline-button-group.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./common-outline-button-group.scss",
})
export class CommonOutlineButtonGroup {
  public outlineButtonData = CommonOutlineButton;
}
