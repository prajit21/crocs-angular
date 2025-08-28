import { Component } from "@angular/core";

import { commonAbsoluteCardData } from "../../../../shared/data/bonus-ui/creative-cards";

@Component({
  selector: "app-common-absolute-card",
  imports: [],
  templateUrl: "./common-absolute-card.html",
  styleUrl: "./common-absolute-card.scss",
})
export class CommonAbsoluteCard {
  public commonData = commonAbsoluteCardData;
}
