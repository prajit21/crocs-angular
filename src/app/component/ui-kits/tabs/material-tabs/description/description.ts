import { Component, ChangeDetectionStrategy } from "@angular/core";

import { descriptionData } from "../../../../../shared/data/ui-kits/tab";

@Component({
  selector: "app-description",
  imports: [],
  templateUrl: "./description.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./description.scss",
})
export class Description {
  public descriptionData = descriptionData;
}
