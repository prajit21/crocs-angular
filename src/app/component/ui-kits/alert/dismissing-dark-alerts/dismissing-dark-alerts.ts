import { NgClass } from "@angular/common";
import { Component, ChangeDetectionStrategy } from "@angular/core";

import { Feathericon } from "../../../../shared/component/feathericon/feathericon";

@Component({
  selector: "app-dismissing-dark-alerts",
  imports: [Feathericon, NgClass],
  templateUrl: "./dismissing-dark-alerts.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./dismissing-dark-alerts.scss",
})
export class DismissingDarkAlerts {
  public alerts: boolean = true;

  close() {
    this.alerts = false;
  }
}
