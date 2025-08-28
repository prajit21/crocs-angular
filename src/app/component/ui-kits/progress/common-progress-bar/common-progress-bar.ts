import { CommonModule } from "@angular/common";
import { Component, input } from "@angular/core";

import { progress } from "../../../../shared/data/ui-kits/progress";

@Component({
  selector: "app-common-progress-bar",
  imports: [CommonModule],
  templateUrl: "./common-progress-bar.html",
  styleUrl: "./common-progress-bar.scss",
})
export class CommonProgressBar {
  readonly data = input<progress[]>();
}
