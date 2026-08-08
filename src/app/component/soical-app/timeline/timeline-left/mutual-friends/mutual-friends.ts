import { Component, ChangeDetectionStrategy } from "@angular/core";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import * as data from "../../../../../shared/data/social-media/social-media-data";

@Component({
  selector: "app-mutual-friends",
  imports: [NgbModule],
  templateUrl: "./mutual-friends.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./mutual-friends.scss",
})
export class MutualFriends {
  public isCollapsed = false;
  public mautalFriendsData = data.mutualFriendsData;
}
