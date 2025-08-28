import { Component } from "@angular/core";

import { Listcheckbox } from "../../../../shared/data/ui-kits/lists";

@Component({
  selector: "app-lists-checkbox",
  imports: [],
  templateUrl: "./lists-checkbox.html",
  styleUrl: "./lists-checkbox.scss",
})
export class ListsCheckbox {
  public listsCheckboxData = Listcheckbox;
}
