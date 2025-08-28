import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

import { SmallProgressbars } from "../../../../shared/data/ui-kits/progress";

@Component({
  selector: "app-small-progress-bars",
  imports: [CommonModule],
  templateUrl: "./small-progress-bars.html",
  styleUrl: "./small-progress-bars.scss",
})
export class SmallProgressBars {
  public smallProgressData = SmallProgressbars;
}
