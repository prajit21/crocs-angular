import { Component } from "@angular/core";

import { AdditionalContent } from "./additional-content/additional-content";
import { AlertsIconsTextActions } from "./alerts-icons-text-actions/alerts-icons-text-actions";
import { DismissingDarkAlerts } from "./dismissing-dark-alerts/dismissing-dark-alerts";
import { DismissingLightAlerts } from "./dismissing-light-alerts/dismissing-light-alerts";
import { LeftBorderAlert } from "./left-border-alert/left-border-alert";
import { LiveAlert } from "./live-alert/live-alert";
import { OutlineDarkLightAlerts } from "./outline-dark-light-alerts/outline-dark-light-alerts";
import { TopCommonAlerts } from "./top-common-alerts/top-common-alerts";
import * as Data from "../../../shared/data/ui-kits/alert";

@Component({
  selector: "app-alert",
  imports: [
    TopCommonAlerts,
    AlertsIconsTextActions,
    DismissingDarkAlerts,
    LeftBorderAlert,
    LiveAlert,
    OutlineDarkLightAlerts,
    AdditionalContent,
    DismissingLightAlerts,
  ],
  templateUrl: "./alert.html",
  styleUrl: "./alert.scss",
})
export class Alert {
  public darkAlert = Data.darkThemAlert;
  public LightAlert = Data.lightThemeAlert;
}
