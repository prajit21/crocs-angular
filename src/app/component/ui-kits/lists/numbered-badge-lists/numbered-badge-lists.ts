import { Component } from "@angular/core";

import { NumberedBadgeList } from "../../../../shared/data/ui-kits/lists";

@Component({
  selector: "app-numbered-badge-lists",
  imports: [],
  templateUrl: "./numbered-badge-lists.html",
  styleUrl: "./numbered-badge-lists.scss",
})
export class NumberedBadgeLists {
  public NumberedBadgeData = NumberedBadgeList;
}
