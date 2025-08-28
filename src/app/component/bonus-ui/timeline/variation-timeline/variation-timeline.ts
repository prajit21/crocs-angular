import { Component } from "@angular/core";

import { VeriationTimeline } from "../../../../shared/data/bonus-ui/timeline";

@Component({
  selector: "app-variation-timeline",
  imports: [],
  templateUrl: "./variation-timeline.html",
  styleUrl: "./variation-timeline.scss",
})
export class VariationTimeline {
  public veriationTimeline = VeriationTimeline;
}
