import { Component, ChangeDetectionStrategy } from "@angular/core";

import { CustomContentList } from "../../../../shared/data/ui-kits/lists";

@Component({
  selector: "app-custom-content-lists",
  imports: [],
  templateUrl: "./custom-content-lists.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./custom-content-lists.scss",
})
export class CustomContentLists {
  public customcontentData = CustomContentList;
}
