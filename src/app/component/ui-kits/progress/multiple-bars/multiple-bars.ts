import { Component, ChangeDetectionStrategy } from "@angular/core";

import { Multiplebars } from "../../../../shared/data/ui-kits/progress";

@Component({
  selector: "app-multiple-bars",
  templateUrl: "./multiple-bars.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./multiple-bars.scss",
})
export class MultipleBars {
  public mutiPalbarData = Multiplebars;
}
