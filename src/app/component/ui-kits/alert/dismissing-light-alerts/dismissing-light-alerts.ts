import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

import { Feathericon } from "../../../../shared/component/feathericon/feathericon";

@Component({
  selector: "app-dismissing-light-alerts",
  imports: [Feathericon, CommonModule],
  templateUrl: "./dismissing-light-alerts.html",
  styleUrl: "./dismissing-light-alerts.scss",
})
export class DismissingLightAlerts {
  public alerts2: boolean = true;

  close2() {
    this.alerts2 = false;
  }
}
