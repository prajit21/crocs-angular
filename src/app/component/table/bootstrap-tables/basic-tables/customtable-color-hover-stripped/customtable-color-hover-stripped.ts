import { Component } from "@angular/core";

import { customHover } from "../../../../../shared/data/table/basic-tables";

@Component({
  selector: "app-customtable-color-hover-stripped",
  imports: [],
  templateUrl: "./customtable-color-hover-stripped.html",
  styleUrl: "./customtable-color-hover-stripped.scss",
})
export class CustomtableColorHoverStripped {
  public customhoverData = customHover;
}
