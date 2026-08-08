import { Component, ChangeDetectionStrategy } from "@angular/core";

import { NumberedBadgeList } from "../../../../shared/data/ui-kits/lists";

@Component({
  selector: "app-numbered-badge-lists",
  imports: [],
  templateUrl: "./numbered-badge-lists.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./numbered-badge-lists.scss",
})
export class NumberedBadgeLists {
  public NumberedBadgeData = NumberedBadgeList;
}
