import { Component } from "@angular/core";

import { basictable } from "../../../../../shared/data/table/basic-tables";

@Component({
  selector: "app-basic-table-border-bottom-color",
  imports: [],
  templateUrl: "./basic-table-border-bottom-color.html",
  styleUrl: "./basic-table-border-bottom-color.scss",
})
export class BasicTableBorderBottomColor {
  public basicTable = basictable;
}
