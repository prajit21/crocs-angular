import { Component, ChangeDetectionStrategy } from "@angular/core";
import { FormsModule } from "@angular/forms";

import {
  paymentData,
  soicaMidia,
} from "../../../../../shared/data/form-controls/checkbox-radio";

@Component({
  selector: "app-animated-buttons",
  imports: [FormsModule],
  templateUrl: "./animated-buttons.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./animated-buttons.scss",
})
export class AnimatedButtons {
  public SoicalmidiaData = soicaMidia;
  public payment = paymentData;
}
