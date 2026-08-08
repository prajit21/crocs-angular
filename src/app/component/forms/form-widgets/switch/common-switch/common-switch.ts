import { Component, ChangeDetectionStrategy } from "@angular/core";

import { commonSwitch } from "../../../../../shared/data/forms-widgets/switch";

@Component({
  selector: "app-common-switch",
  imports: [],
  templateUrl: "./common-switch.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./common-switch.scss",
})
export class CommonSwitch {
  public switchData = commonSwitch;
}
