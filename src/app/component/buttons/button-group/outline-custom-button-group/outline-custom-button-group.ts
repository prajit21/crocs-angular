import { Component, ChangeDetectionStrategy } from "@angular/core";

import { outlinecustomData } from "../../../../shared/data/buttons/button-group";

@Component({
  selector: "app-outline-custom-button-group",
  imports: [],
  templateUrl: "./outline-custom-button-group.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./outline-custom-button-group.scss",
})
export class OutlineCustomButtonGroup {
  public commonData = outlinecustomData;
}
