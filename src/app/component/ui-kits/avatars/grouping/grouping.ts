import { Component } from "@angular/core";

import { Groupings } from "../../../../shared/data/ui-kits/avavtar";

@Component({
  selector: "app-grouping",
  imports: [],
  templateUrl: "./grouping.html",
  styleUrl: "./grouping.scss",
})
export class Grouping {
  public groupingdata = Groupings;
}
