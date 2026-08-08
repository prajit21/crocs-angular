import { Component, ChangeDetectionStrategy } from "@angular/core";

import { FontSize } from "../../../../shared/data/ui-kits/helper-classes";

@Component({
  selector: "app-font-sizes",
  imports: [],
  templateUrl: "./font-sizes.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./font-sizes.scss",
})
export class FontSizes {
  public fonstSizeData = FontSize;
}
