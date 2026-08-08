import { Component, ChangeDetectionStrategy } from "@angular/core";

import { RightRibbons } from "../../../../shared/data/bonus-ui/ribbons";

@Component({
  selector: "app-variations-right-ribbons",
  imports: [],
  templateUrl: "./variations-right-ribbons.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./variations-right-ribbons.scss",
})
export class VariationsRightRibbons {
  public rightRibbonsData = RightRibbons;
}
