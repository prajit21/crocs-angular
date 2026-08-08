import { Component, input, ChangeDetectionStrategy } from "@angular/core";

import { titleData } from "../../../../../shared/data/ui-kits/helper-classes";

@Component({
  selector: "app-common-background-colors",
  imports: [],
  templateUrl: "./common-background-colors.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./common-background-colors.scss",
})
export class CommonBackgroundColors {
  readonly data = input<titleData[]>();
}
