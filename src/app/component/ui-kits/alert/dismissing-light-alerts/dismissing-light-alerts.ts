import { NgClass } from "@angular/common";
import { Component, ChangeDetectionStrategy } from "@angular/core";

import { Feathericon } from "../../../../shared/component/feathericon/feathericon";

@Component({
  selector: "app-dismissing-light-alerts",
  imports: [Feathericon, NgClass],
  templateUrl: "./dismissing-light-alerts.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./dismissing-light-alerts.scss",
})
export class DismissingLightAlerts {
  public alerts2: boolean = true;

  close2() {
    this.alerts2 = false;
  }
}
