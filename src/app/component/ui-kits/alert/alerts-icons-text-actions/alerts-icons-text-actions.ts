import { Component } from "@angular/core";

import * as data from "../../../../shared/data/ui-kits/alert";

@Component({
  selector: "app-alerts-icons-text-actions",
  imports: [],
  templateUrl: "./alerts-icons-text-actions.html",
  styleUrl: "./alerts-icons-text-actions.scss",
})
export class AlertsIconsTextActions {
  public icontextData = data.IconandTextAlert;

  close(icontextitem: data.Icons) {
    this.icontextData.splice(this.icontextData.indexOf(icontextitem), 1);
  }
}
