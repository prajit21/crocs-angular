import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

import { CustomProgressbars } from "../../../../shared/data/ui-kits/progress";

@Component({
  selector: "app-custom-progress-bars",
  imports: [CommonModule],
  templateUrl: "./custom-progress-bars.html",
  styleUrl: "./custom-progress-bars.scss",
})
export class CustomProgressBars {
  public customprogressData = CustomProgressbars;
}
