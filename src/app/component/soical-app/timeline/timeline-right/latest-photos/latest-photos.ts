import { Component, ChangeDetectionStrategy } from "@angular/core";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import * as data from "../../../../../shared/data/social-media/social-media-data";

@Component({
  selector: "app-latest-photos",
  imports: [NgbModule],
  templateUrl: "./latest-photos.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./latest-photos.scss",
})
export class LatestPhotos {
  public latestPhotosData = data.latestPhotos;
}
