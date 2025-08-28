import { Component } from "@angular/core";

import { BasicTimeline } from "./basic-timeline/basic-timeline";
import { HorizotalTimeline } from "./horizotal-timeline/horizotal-timeline";
import { HoveringTimeline } from "./hovering-timeline/hovering-timeline";
import { TimelineChat } from "./timeline-chat/timeline-chat";
import { VariationTimeline } from "./variation-timeline/variation-timeline";

@Component({
  selector: "app-timeline",
  imports: [
    BasicTimeline,
    HorizotalTimeline,
    HoveringTimeline,
    VariationTimeline,
    TimelineChat,
  ],
  templateUrl: "./timeline.html",
  styleUrl: "./timeline.scss",
})
export class Timeline {}
