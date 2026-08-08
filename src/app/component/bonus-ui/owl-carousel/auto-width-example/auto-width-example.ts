import { Component, ChangeDetectionStrategy } from "@angular/core";

import { CarouselModule } from "ngx-owl-carousel-o";

import {
  autoWidthoption,
  commonImg,
} from "../../../../shared/data/bonus-ui/owl-carousel";

@Component({
  selector: "app-auto-width-example",
  imports: [CarouselModule],
  templateUrl: "./auto-width-example.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./auto-width-example.scss",
})
export class AutoWidthExample {
  public widthData = commonImg;
  public autowidhtoptionsData = autoWidthoption;
}
