import { Component, input } from "@angular/core";

import { alert } from "../../../../shared/data/ui-kits/alert";

@Component({
  selector: "app-top-common-alerts",
  imports: [],
  templateUrl: "./top-common-alerts.html",
  styleUrl: "./top-common-alerts.scss",
})
export class TopCommonAlerts {
  readonly data = input<alert[]>();
}
