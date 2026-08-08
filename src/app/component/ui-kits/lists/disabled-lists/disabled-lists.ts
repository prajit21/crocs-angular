import { Component, ChangeDetectionStrategy } from "@angular/core";

import { DisabledList } from "../../../../shared/data/ui-kits/lists";

@Component({
  selector: "app-disabled-lists",
  imports: [],
  templateUrl: "./disabled-lists.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./disabled-lists.scss",
})
export class DisabledLists {
  public disableData = DisabledList;
}
