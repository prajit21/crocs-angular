import { Component } from "@angular/core";

import { CarouselModule } from "ngx-owl-carousel-o";

import {
  withContolImg,
  withControloptions,
} from "../../../../shared/data/bonus-ui/owl-carousel";

@Component({
  selector: "app-with-controls",
  imports: [CarouselModule],
  templateUrl: "./with-controls.html",
  styleUrl: "./with-controls.scss",
})
export class WithControls {
  public withContolData = withContolImg;
  public WithControloptionData = withControloptions;
}
