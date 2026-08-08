import { NgClass } from "@angular/common";
import { Component, ChangeDetectionStrategy } from "@angular/core";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { All } from "./all/all";
import { Archive } from "./archive/archive";
import { Following } from "./following/following";
import { ClickOutsideDirective } from "../../../../shared/directive/outside.directive";

@Component({
  selector: "app-dashboard-notifications",
  imports: [All, Following, Archive, NgbModule, ClickOutsideDirective, NgClass],
  templateUrl: "./dashboard-notifications.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./dashboard-notifications.scss",
})
export class DashboardNotifications {
  public active = 1;
  public notifications: boolean = false;
  public openTab: string = "all";
  public isOpen: boolean = false;

  constructor() {}

  public tabbed(val: string) {
    this.openTab = val;
  }

  notification() {
    this.notifications = !this.notifications;
  }
}
