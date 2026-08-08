import { Component, ChangeDetectionStrategy } from "@angular/core";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import * as data from "../../../../../shared/data/social-media/social-media-data";

@Component({
  selector: "app-friends-profile",
  imports: [NgbModule],
  templateUrl: "./friends-profile.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./friends-profile.scss",
})
export class FriendsProfile {
  public friednsData = data.Friends;
}
