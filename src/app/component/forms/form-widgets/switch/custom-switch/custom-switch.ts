import { Component, ChangeDetectionStrategy } from "@angular/core";

import { customSwitch } from "../../../../../shared/data/forms-widgets/switch";

@Component({
  selector: "app-custom-switch",
  imports: [],
  templateUrl: "./custom-switch.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./custom-switch.scss",
})
export class CustomSwitch {
  public customData = customSwitch;
}
