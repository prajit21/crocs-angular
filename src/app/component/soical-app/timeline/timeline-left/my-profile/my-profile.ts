import { Component, ChangeDetectionStrategy } from "@angular/core";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-my-profile",
  imports: [NgbModule],
  templateUrl: "./my-profile.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./my-profile.scss",
})
export class MyProfile {
  public isCollapsed = false;
}
