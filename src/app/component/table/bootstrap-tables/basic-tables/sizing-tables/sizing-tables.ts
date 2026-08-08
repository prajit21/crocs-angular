import { Component, ChangeDetectionStrategy } from "@angular/core";

import { sizingTable } from "../../../../../shared/data/table/basic-tables";

@Component({
  selector: "app-sizing-tables",
  imports: [],
  templateUrl: "./sizing-tables.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./sizing-tables.scss",
})
export class SizingTables {
  public sizingData = sizingTable;
}
