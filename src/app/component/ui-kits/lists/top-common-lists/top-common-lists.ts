import { Component, ChangeDetectionStrategy } from "@angular/core";

import { topcommonlists } from "../../../../shared/data/ui-kits/lists";

@Component({
  selector: "app-top-common-lists",
  imports: [],
  templateUrl: "./top-common-lists.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./top-common-lists.scss",
})
export class TopCommonLists {
  public commonListData = topcommonlists;
}
