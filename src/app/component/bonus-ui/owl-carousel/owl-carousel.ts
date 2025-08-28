import { Component } from "@angular/core";

import { Animation } from "./animation/animation";
import { AutoPlay } from "./auto-play/auto-play";
import { AutoWidthExample } from "./auto-width-example/auto-width-example";
import { CenterExample } from "./center-example/center-example";
import { CrossFade } from "./cross-fade/cross-fade";
import { LazyLoadExample } from "./lazy-load-example/lazy-load-example";
import { ResponsiveExample } from "./responsive-example/responsive-example";
import { RightLeftExample } from "./right-left-example/right-left-example";
import { SlidesOnly } from "./slides-only/slides-only";
import { WithCaptions } from "./with-captions/with-captions";
import { WithControls } from "./with-controls/with-controls";

@Component({
  selector: "app-owl-carousel",
  imports: [
    AutoPlay,
    AutoWidthExample,
    CenterExample,
    CrossFade,
    LazyLoadExample,
    ResponsiveExample,
    RightLeftExample,
    SlidesOnly,
    WithControls,
    Animation,
    WithCaptions,
  ],
  templateUrl: "./owl-carousel.html",
  styleUrl: "./owl-carousel.scss",
})
export class OwlCarousel {}
