import { Component } from "@angular/core";

import { CommonBorders } from "./common-borders/common-borders";
import * as borderData from "../../../../shared/data/ui-kits/helper-classes";

@Component({
  selector: "app-styles-borders",
  imports: [CommonBorders],
  templateUrl: "./styles-borders.html",
  styleUrl: "./styles-borders.scss",
})
export class StylesBorders {
  public customborder = borderData.Customborder;
  public borderColor = borderData.colorBorders;
  public borderWiths = borderData.borderWith;
  public textColors = borderData.TextColor;
}
