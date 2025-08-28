import { Component } from "@angular/core";

import { horizontalTimeline } from "../../../../shared/data/bonus-ui/timeline";

@Component({
  selector: "app-horizotal-timeline",
  imports: [],
  templateUrl: "./horizotal-timeline.html",
  styleUrl: "./horizotal-timeline.scss",
})
export class HorizotalTimeline {
  public horizontalTimelineData = horizontalTimeline;
}
