import { Component, ChangeDetectionStrategy } from "@angular/core";

import { AdditionalContents } from "../../../../shared/data/ui-kits/alert";

@Component({
  selector: "app-additional-content",
  imports: [],
  templateUrl: "./additional-content.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./additional-content.scss",
})
export class AdditionalContent {
  public additionalData = AdditionalContents;
}
