import { Component, input } from "@angular/core";

import { titleData } from "../../../../../shared/data/ui-kits/helper-classes";

@Component({
  selector: "app-common-borders-displays",
  imports: [],
  templateUrl: "./common-borders-displays.html",
  styleUrl: "./common-borders-displays.scss",
})
export class CommonBordersDisplays {
  readonly data = input<titleData[]>();
}
