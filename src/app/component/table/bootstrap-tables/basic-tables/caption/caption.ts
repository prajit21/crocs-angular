import { Component, ChangeDetectionStrategy } from "@angular/core";

import { caption } from "../../../../../shared/data/table/basic-tables";

@Component({
  selector: "app-caption",
  imports: [],
  templateUrl: "./caption.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./caption.scss",
})
export class Caption {
  public captionData = caption;
}
