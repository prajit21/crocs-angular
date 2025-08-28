import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

import { LargeProgressbars } from "../../../../shared/data/ui-kits/progress";

@Component({
  selector: "app-large-progress-bars",
  imports: [CommonModule],
  templateUrl: "./large-progress-bars.html",
  styleUrl: "./large-progress-bars.scss",
})
export class LargeProgressBars {
  public largeProgressData = LargeProgressbars;
}
