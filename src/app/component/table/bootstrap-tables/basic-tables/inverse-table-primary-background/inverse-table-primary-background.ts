import { Component, ChangeDetectionStrategy } from "@angular/core";

import { PrimaryBackground } from "../../../../../shared/data/table/basic-tables";

@Component({
  selector: "app-inverse-table-primary-background",
  imports: [],
  templateUrl: "./inverse-table-primary-background.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./inverse-table-primary-background.scss",
})
export class InverseTablePrimaryBackground {
  public primaryData = PrimaryBackground;
}
