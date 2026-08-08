import { Component, ChangeDetectionStrategy } from "@angular/core";

import { allData } from "../../../shared/data/search-result/search-result";

@Component({
  selector: "app-all",
  imports: [],
  templateUrl: "./all.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./all.scss",
})
export class All {
  public allData = allData;
}
