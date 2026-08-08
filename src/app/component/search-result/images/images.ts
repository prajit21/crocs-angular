import { Component, ChangeDetectionStrategy } from "@angular/core";

import * as Data from "../../../shared/data/social-media/social-media-data";

@Component({
  selector: "app-images",
  imports: [],
  templateUrl: "./images.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./images.scss",
})
export class Images {
  public photosData = Data.photosData;
}
