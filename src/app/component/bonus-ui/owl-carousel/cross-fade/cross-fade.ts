import { Component, ChangeDetectionStrategy } from "@angular/core";

import { CarouselModule } from "ngx-owl-carousel-o";

import {
  crossFade,
  fadeOptions,
} from "../../../../shared/data/bonus-ui/owl-carousel";

@Component({
  selector: "app-cross-fade",
  imports: [CarouselModule],
  templateUrl: "./cross-fade.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./cross-fade.scss",
})
export class CrossFade {
  public crossfadeData = crossFade;
  public fadeoptionsData = fadeOptions;
}
