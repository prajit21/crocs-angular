import { Component } from "@angular/core";

import { CommonBordersDisplays } from "./common-borders-displays/common-borders-displays";
import * as borderData from "../../../../shared/data/ui-kits/helper-classes";

@Component({
  selector: "app-borders-displays",
  imports: [CommonBordersDisplays],
  templateUrl: "./borders-displays.html",
  styleUrl: "./borders-displays.scss",
})
export class BordersDisplays {
  public Additiveborder = borderData.AdditiveBorderData;
  public SubtractiveborderData = borderData.Subtractiveborder;
  public AdditiveRadiusData = borderData.AdditiveRadius;
}
