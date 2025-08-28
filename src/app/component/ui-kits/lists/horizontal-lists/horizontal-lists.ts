import { Component } from "@angular/core";

import { HorizontalList } from "../../../../shared/data/ui-kits/lists";

@Component({
  selector: "app-horizontal-lists",
  imports: [],
  templateUrl: "./horizontal-lists.html",
  styleUrl: "./horizontal-lists.scss",
})
export class HorizontalLists {
  public horizontalData = HorizontalList;
}
