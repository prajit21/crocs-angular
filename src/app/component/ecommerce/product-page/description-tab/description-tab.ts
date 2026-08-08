import { NgClass } from "@angular/common";
import { Component, ChangeDetectionStrategy } from "@angular/core";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-description-tab",
  imports: [NgbModule, NgClass],
  templateUrl: "./description-tab.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./description-tab.scss",
})
export class DescriptionTab {
  public openTab: string = "febric";

  public tabbed(val: string) {
    this.openTab = val;
  }
}
