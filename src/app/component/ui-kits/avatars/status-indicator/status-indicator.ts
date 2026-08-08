import { Component, ChangeDetectionStrategy } from "@angular/core";

import { StatusIndicators } from "../../../../shared/data/ui-kits/avavtar";

@Component({
  selector: "app-status-indicator",
  imports: [],
  templateUrl: "./status-indicator.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./status-indicator.scss",
})
export class StatusIndicator {
  public statusindicatorData = StatusIndicators;
}
