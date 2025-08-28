import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

import { Feathericon } from "../../../../shared/component/feathericon/feathericon";

@Component({
  selector: "app-dismissing-dark-alerts",
  imports: [CommonModule, Feathericon],
  templateUrl: "./dismissing-dark-alerts.html",
  styleUrl: "./dismissing-dark-alerts.scss",
})
export class DismissingDarkAlerts {
  public alerts: boolean = true;

  close() {
    this.alerts = false;
  }
}
