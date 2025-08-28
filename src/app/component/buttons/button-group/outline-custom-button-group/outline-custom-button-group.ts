import { Component } from "@angular/core";

import { outlinecustomData } from "../../../../shared/data/buttons/button-group";

@Component({
  selector: "app-outline-custom-button-group",
  imports: [],
  templateUrl: "./outline-custom-button-group.html",
  styleUrl: "./outline-custom-button-group.scss",
})
export class OutlineCustomButtonGroup {
  public commonData = outlinecustomData;
}
