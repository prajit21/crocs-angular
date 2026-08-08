import { Component, ChangeDetectionStrategy } from "@angular/core";

import { Ratios } from "../../../../shared/data/ui-kits/avavtar";

@Component({
  selector: "app-ratio",
  imports: [],
  templateUrl: "./ratio.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./ratio.scss",
})
export class Ratio {
  public ratioData = Ratios;
}
