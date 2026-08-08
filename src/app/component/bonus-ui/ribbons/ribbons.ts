import { Component, ChangeDetectionStrategy } from "@angular/core";

import { VariationsLeftRibbons } from "./variations-left-ribbons/variations-left-ribbons";
import { VariationsRightRibbons } from "./variations-right-ribbons/variations-right-ribbons";

@Component({
  selector: "app-ribbons",
  imports: [VariationsRightRibbons, VariationsLeftRibbons],
  templateUrl: "./ribbons.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./ribbons.scss",
})
export class Ribbons {}
