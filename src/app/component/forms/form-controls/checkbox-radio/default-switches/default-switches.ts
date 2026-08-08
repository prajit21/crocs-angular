import { Component, ChangeDetectionStrategy } from "@angular/core";

import { defaultswitch } from "../../../../../shared/data/form-controls/checkbox-radio";

@Component({
  selector: "app-default-switches",
  imports: [],
  templateUrl: "./default-switches.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./default-switches.scss",
})
export class DefaultSwitches {
  public switches = defaultswitch;
}
