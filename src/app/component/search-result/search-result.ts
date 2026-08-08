import { NgClass } from "@angular/common";
import { Component, ChangeDetectionStrategy } from "@angular/core";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { All } from "./all/all";
import { Images } from "./images/images";
import { Videos } from "./videos/videos";

@Component({
  selector: "app-search-result",
  imports: [All, NgbModule, Images, Videos, NgClass],
  templateUrl: "./search-result.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./search-result.scss",
})
export class SearchResult {
  public openTab: string = "All";

  public tabbed(val: string) {
    this.openTab = val;
  }
}
