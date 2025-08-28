import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-description-tab",
  imports: [CommonModule, NgbModule],
  templateUrl: "./description-tab.html",
  styleUrl: "./description-tab.scss",
})
export class DescriptionTab {
  public openTab: string = "febric";

  public tabbed(val: string) {
    this.openTab = val;
  }
}
