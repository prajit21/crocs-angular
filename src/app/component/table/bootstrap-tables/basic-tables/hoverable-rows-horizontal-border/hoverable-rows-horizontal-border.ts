import { Component, ChangeDetectionStrategy } from "@angular/core";

import { Feathericon } from "../../../../../shared/component/feathericon/feathericon";
import { hoverbleData } from "../../../../../shared/data/table/basic-tables";

@Component({
  selector: "app-hoverable-rows-horizontal-border",
  imports: [Feathericon],
  templateUrl: "./hoverable-rows-horizontal-border.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./hoverable-rows-horizontal-border.scss",
})
export class HoverableRowsHorizontalBorder {
  public hoverable = hoverbleData;
}
