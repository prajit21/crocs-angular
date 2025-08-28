import { Component } from "@angular/core";

import { LightboxModule } from "ng-gallery/lightbox";

import * as Data from "../../../shared/data/gallery/hover";

@Component({
  selector: "app-hover-effects",
  imports: [LightboxModule],
  templateUrl: "./hover-effects.html",
  styleUrl: "./hover-effects.scss",
})
export class HoverEffects {
  public imgData = Data.imgData;
  public hoverData = Data.hoverData;
}
