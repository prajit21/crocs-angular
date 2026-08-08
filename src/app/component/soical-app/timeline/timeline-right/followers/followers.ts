import { Component, ChangeDetectionStrategy } from "@angular/core";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import * as data from "../../../../../shared/data/social-media/social-media-data";

@Component({
  selector: "app-followers",
  imports: [NgbModule],
  templateUrl: "./followers.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./followers.scss",
})
export class Followers {
  public followersData = data.Followers;
}
