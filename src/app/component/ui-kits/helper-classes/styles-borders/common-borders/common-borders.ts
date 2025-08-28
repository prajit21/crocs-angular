import { Component, input } from "@angular/core";

import { titleData } from "../../../../../shared/data/ui-kits/helper-classes";

@Component({
  selector: "app-common-borders",
  imports: [],
  templateUrl: "./common-borders.html",
  styleUrl: "./common-borders.scss",
})
export class CommonBorders {
  readonly data = input<titleData[]>();
}
