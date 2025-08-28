import { Component } from "@angular/core";

import { Feathericon } from "../../../../shared/component/feathericon/feathericon";
import * as data from "../../../../shared/data/ui-kits/alert";

@Component({
  selector: "app-outline-dark-light-alerts",
  imports: [Feathericon],
  templateUrl: "./outline-dark-light-alerts.html",
  styleUrl: "./outline-dark-light-alerts.scss",
})
export class OutlineDarkLightAlerts {
  public outlinealertData = data.OutlineDarkLightAlert;

  close(outlineitem: data.Alert) {
    this.outlinealertData.splice(this.outlinealertData.indexOf(outlineitem), 1);
  }
}
