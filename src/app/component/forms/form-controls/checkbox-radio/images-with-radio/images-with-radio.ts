import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { imageRadio } from "../../../../../shared/data/form-controls/checkbox-radio";

@Component({
  selector: "app-images-with-radio",
  imports: [CommonModule, FormsModule],
  templateUrl: "./images-with-radio.html",
  styleUrl: "./images-with-radio.scss",
})
export class ImagesWithRadio {
  public imgradioData = imageRadio;
}
