import { Component, ChangeDetectionStrategy } from "@angular/core";

import { LeftRibbons } from "../../../../shared/data/bonus-ui/ribbons";

@Component({
  selector: "app-variations-left-ribbons",
  imports: [],
  templateUrl: "./variations-left-ribbons.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./variations-left-ribbons.scss",
})
export class VariationsLeftRibbons {
  public leftRibbonsData = LeftRibbons;
}
