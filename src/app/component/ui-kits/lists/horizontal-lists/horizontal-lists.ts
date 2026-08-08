import { Component, ChangeDetectionStrategy } from "@angular/core";

import { HorizontalList } from "../../../../shared/data/ui-kits/lists";

@Component({
  selector: "app-horizontal-lists",
  imports: [],
  templateUrl: "./horizontal-lists.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./horizontal-lists.scss",
})
export class HorizontalLists {
  public horizontalData = HorizontalList;
}
