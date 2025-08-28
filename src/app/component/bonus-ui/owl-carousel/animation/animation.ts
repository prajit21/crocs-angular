import { Component } from "@angular/core";

import { CarouselModule } from "ngx-owl-carousel-o";

import {
  animationOptions,
  commonImg,
} from "../../../../shared/data/bonus-ui/owl-carousel";

@Component({
  selector: "app-animation",
  imports: [CarouselModule],
  templateUrl: "./animation.html",
  styleUrl: "./animation.scss",
})
export class Animation {
  public ImgData = commonImg;
  public AnimationOption = animationOptions;
}
