import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-alerts-table",
  imports: [CommonModule, NgbModule],
  templateUrl: "./alerts-table.html",
  styleUrl: "./alerts-table.scss",
})
export class AlertsTable {
  public alerts: boolean = true;
  public alerts2: boolean = true;

  close() {
    this.alerts = false;
  }

  close2() {
    this.alerts2 = false;
  }
}
