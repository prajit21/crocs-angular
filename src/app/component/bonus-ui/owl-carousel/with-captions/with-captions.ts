import { Component } from "@angular/core";

import { CarouselModule } from "ngx-owl-carousel-o";

import {
  carouselImages,
  withCaptionoptions,
} from "../../../../shared/data/bonus-ui/owl-carousel";

@Component({
  selector: "app-with-captions",
  imports: [CarouselModule],
  templateUrl: "./with-captions.html",
  styleUrl: "./with-captions.scss",
})
export class WithCaptions {
  public ImgData = carouselImages;
  public captionImgOption = withCaptionoptions;
}
