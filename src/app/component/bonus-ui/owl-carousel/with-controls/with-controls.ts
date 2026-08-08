import { Component, ChangeDetectionStrategy } from "@angular/core";

import { CarouselModule } from "ngx-owl-carousel-o";

import {
  withContolImg,
  withControloptions,
} from "../../../../shared/data/bonus-ui/owl-carousel";

@Component({
  selector: "app-with-controls",
  imports: [CarouselModule],
  templateUrl: "./with-controls.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./with-controls.scss",
})
export class WithControls {
  public withContolData = withContolImg;
  public WithControloptionData = withControloptions;
}
