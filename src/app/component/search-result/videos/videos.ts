import { Component, inject, ChangeDetectionStrategy } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

import * as Data from "../../../shared/data/search-result/search-result";

@Component({
  selector: "app-videos",
  imports: [],
  templateUrl: "./videos.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./videos.scss",
})
export class Videos {
  sanitizer = inject(DomSanitizer);

  public videosData = Data.videosData;

  safe(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
