import { Component, ChangeDetectionStrategy } from "@angular/core";

import { breckpointSpecific } from "../../../../../shared/data/table/basic-tables";

@Component({
  selector: "app-breckpoint-specific",
  imports: [],
  templateUrl: "./breckpoint-specific.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./breckpoint-specific.scss",
})
export class BreckpointSpecific {
  public breckpointData = breckpointSpecific;
}
