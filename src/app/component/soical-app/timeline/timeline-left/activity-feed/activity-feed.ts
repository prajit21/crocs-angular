import { Component, ChangeDetectionStrategy } from "@angular/core";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import * as data from "../../../../../shared/data/social-media/social-media-data";

@Component({
  selector: "app-activity-feed",
  imports: [NgbModule],
  templateUrl: "./activity-feed.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./activity-feed.scss",
})
export class ActivityFeed {
  public isCollapsed = false;
  public activityFeedData = data.activityFeedData;
}
