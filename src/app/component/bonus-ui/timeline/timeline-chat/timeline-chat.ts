import { Component } from "@angular/core";

import { CarouselModule, OwlOptions } from "ngx-owl-carousel-o";

@Component({
  selector: "app-timeline-chat",
  imports: [CarouselModule],
  templateUrl: "./timeline-chat.html",
  styleUrl: "./timeline-chat.scss",
})
export class TimelineChat {
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    mouseDrag: false,
    dots: false,
    nav: true,
    navSpeed: 700,
    navText: ["", ""],
    responsive: {
      0: {
        items: 1,
      },
    },
  };
}
