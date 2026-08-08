import { Component, ChangeDetectionStrategy } from "@angular/core";

import { CarouselModule } from "ngx-owl-carousel-o";

import {
  RightToLeftoptions,
  commonImg,
} from "../../../../shared/data/bonus-ui/owl-carousel";

@Component({
  selector: "app-right-left-example",
  imports: [CarouselModule],
  templateUrl: "./right-left-example.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./right-left-example.scss",
})
export class RightLeftExample {
  public rightLeftData = commonImg;
  public rightleftoptions = RightToLeftoptions;
}
