import { Component } from "@angular/core";

import { CommonBackgroundColors } from "./common-background-colors/common-background-colors";
import * as borderData from "../../../../shared/data/ui-kits/helper-classes";

@Component({
  selector: "app-background-colors",
  imports: [CommonBackgroundColors],
  templateUrl: "./background-colors.html",
  styleUrl: "./background-colors.scss",
})
export class BackgroundColors {
  public DarkBackgrounData = borderData.DarkBackground;
  public LightBackgroundsData = borderData.Lightbackgrounds;
  public ExtendedBackgroundData = borderData.ExtendedBackground;
}
