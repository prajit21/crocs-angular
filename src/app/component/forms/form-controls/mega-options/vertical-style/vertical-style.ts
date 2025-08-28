import { Component } from "@angular/core";

import { VerticalStyles } from "../../../../../shared/data/form-controls/mega-options";

@Component({
  selector: "app-vertical-style",
  imports: [],
  templateUrl: "./vertical-style.html",
  styleUrl: "./vertical-style.scss",
})
export class VerticalStyle {
  public verticalstyleData = VerticalStyles;
}
