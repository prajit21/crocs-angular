import { Component, ChangeDetectionStrategy } from "@angular/core";

import { InverseTables } from "../../../../../shared/data/table/basic-tables";

@Component({
  selector: "app-inverse-table",
  imports: [],
  templateUrl: "./inverse-table.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./inverse-table.scss",
})
export class InverseTable {
  public inversetableData = InverseTables;
}
