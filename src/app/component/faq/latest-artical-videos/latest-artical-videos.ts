import { Component, input, ChangeDetectionStrategy } from "@angular/core";

import { Feathericon } from "../../../shared/component/feathericon/feathericon";
import { articlesAndVideos } from "../../../shared/data/faq/faq";

@Component({
  selector: "app-latest-artical-videos",
  imports: [Feathericon],
  templateUrl: "./latest-artical-videos.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./latest-artical-videos.scss",
})
export class LatestArticalVideos {
  readonly data = input<articlesAndVideos[]>();
}
