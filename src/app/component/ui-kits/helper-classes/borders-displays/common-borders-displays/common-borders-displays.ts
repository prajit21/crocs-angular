import { Component, input, ChangeDetectionStrategy } from "@angular/core";

import { titleData } from "../../../../../shared/data/ui-kits/helper-classes";

@Component({
  selector: "app-common-borders-displays",
  imports: [],
  templateUrl: "./common-borders-displays.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./common-borders-displays.scss",
})
export class CommonBordersDisplays {
  readonly data = input<titleData[]>();
}
