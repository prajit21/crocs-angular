import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { imageChekbox } from "../../../../../shared/data/form-controls/checkbox-radio";

@Component({
  selector: "app-images-with-checkbox",
  imports: [FormsModule],
  templateUrl: "./images-with-checkbox.html",
  styleUrl: "./images-with-checkbox.scss",
})
export class ImagesWithCheckbox {
  public imgcheckboxData = imageChekbox;
}
