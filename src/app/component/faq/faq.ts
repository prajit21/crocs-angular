import { Component } from "@angular/core";

import { FeaturedTurorials } from "./featured-turorials/featured-turorials";
import { LatestArticalVideos } from "./latest-artical-videos/latest-artical-videos";
import { LatestUpdate } from "./latest-update/latest-update";
import { Navigation } from "./navigation/navigation";
import { Questions } from "./questions/questions";
import { SearchArtical } from "./search-artical/search-artical";
import { TopCommonFaq } from "./top-common-faq/top-common-faq";
import {
  FaqTopPartData,
  articlesAndVideosData,
  featuredTutorialData,
} from "../../shared/data/faq/faq";

@Component({
  selector: "app-faq",
  imports: [
    TopCommonFaq,
    Questions,
    SearchArtical,
    Navigation,
    LatestArticalVideos,
    FeaturedTurorials,
    LatestUpdate,
  ],
  templateUrl: "./faq.html",
  styleUrl: "./faq.scss",
})
export class Faq {
  public FaqTopPartData = FaqTopPartData;
  public featuredTutorialData = featuredTutorialData;
  public articlesAndVideosData = articlesAndVideosData;
}
