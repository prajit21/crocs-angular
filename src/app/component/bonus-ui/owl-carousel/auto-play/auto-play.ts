import { Component, ChangeDetectionStrategy } from "@angular/core";

import { CarouselModule } from "ngx-owl-carousel-o";

import {
  autoPlayVariant,
  autovariantOption,
} from "../../../../shared/data/bonus-ui/owl-carousel";

@Component({
  selector: "app-auto-play",
  imports: [CarouselModule],
  templateUrl: "./auto-play.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./auto-play.scss",
})
export class AutoPlay {
  public autovariantoptionsData = autovariantOption;
  public autoVariantData = autoPlayVariant;
}
