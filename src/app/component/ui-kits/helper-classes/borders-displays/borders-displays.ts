import { Component, ChangeDetectionStrategy } from "@angular/core";

import { CommonBordersDisplays } from "./common-borders-displays/common-borders-displays";
import * as borderData from "../../../../shared/data/ui-kits/helper-classes";

@Component({
  selector: "app-borders-displays",
  imports: [CommonBordersDisplays],
  templateUrl: "./borders-displays.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./borders-displays.scss",
})
export class BordersDisplays {
  public Additiveborder = borderData.AdditiveBorderData;
  public SubtractiveborderData = borderData.Subtractiveborder;
  public AdditiveRadiusData = borderData.AdditiveRadius;
}
