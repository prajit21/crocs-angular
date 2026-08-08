import { Component, ChangeDetectionStrategy } from "@angular/core";

import { ScrollableList } from "../../../../shared/data/ui-kits/lists";

@Component({
  selector: "app-scrollable-lists",
  imports: [],
  templateUrl: "./scrollable-lists.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./scrollable-lists.scss",
})
export class ScrollableLists {
  public scrollableData = ScrollableList;
}
