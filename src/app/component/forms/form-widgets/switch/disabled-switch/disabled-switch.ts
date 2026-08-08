import { Component, ChangeDetectionStrategy } from "@angular/core";

import { Disabledoutlineswitch } from "../../../../../shared/data/forms-widgets/switch";

@Component({
  selector: "app-disabled-switch",
  imports: [],
  templateUrl: "./disabled-switch.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./disabled-switch.scss",
})
export class DisabledSwitch {
  public disableoutline = Disabledoutlineswitch;
}
