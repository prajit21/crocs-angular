import { Component, ChangeDetectionStrategy } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { imageRadio } from "../../../../../shared/data/form-controls/checkbox-radio";

@Component({
  selector: "app-images-with-radio",
  imports: [FormsModule],
  templateUrl: "./images-with-radio.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./images-with-radio.scss",
})
export class ImagesWithRadio {
  public imgradioData = imageRadio;
}
