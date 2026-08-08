import { NgClass } from "@angular/common";
import { Component, ChangeDetectionStrategy } from "@angular/core";

import { About } from "../about/about";
import { Friends } from "../friends/friends";
import { Photos } from "../photos/photos";
import { Timeline } from "../timeline/timeline";

@Component({
  selector: "app-soical-profile",
  imports: [Photos, Timeline, Friends, About, NgClass],
  templateUrl: "./soical-profile.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./soical-profile.scss",
})
export class SoicalProfile {
  public active = 1;
  public openTab: string = "timeline";

  tab(value: string) {
    this.openTab = value;
  }
}
