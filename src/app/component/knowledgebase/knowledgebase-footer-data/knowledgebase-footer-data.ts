import { Component } from "@angular/core";

import {
  articlesAndVideosData,
  featuredTutorialData,
} from "../../../shared/data/knowledgebase/knowledgebase";
import { FeaturedTurorials } from "../../faq/featured-turorials/featured-turorials";
import { LatestArticalVideos } from "../../faq/latest-artical-videos/latest-artical-videos";

@Component({
  selector: "app-knowledgebase-footer-data",
  imports: [LatestArticalVideos, FeaturedTurorials],
  templateUrl: "./knowledgebase-footer-data.html",
  styleUrl: "./knowledgebase-footer-data.scss",
})
export class KnowledgebaseFooterData {
  public featuredTutorialData = featuredTutorialData;
  public articlesAndVideosData = articlesAndVideosData;
}
