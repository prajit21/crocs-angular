import { Component, ChangeDetectionStrategy } from "@angular/core";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import * as data from "../../../../../shared/data/social-media/social-media-data";

@Component({
  selector: "app-follwings",
  imports: [NgbModule],
  templateUrl: "./follwings.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./follwings.scss",
})
export class Follwings {
  public followingData = data.Following;
}
