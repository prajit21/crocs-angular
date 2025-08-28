import { Component } from "@angular/core";

import { commonTopCard } from "../../../../shared/data/bonus-ui/basic-card";

@Component({
  selector: "app-top-common-basic-card",
  imports: [],
  templateUrl: "./top-common-basic-card.html",
  styleUrl: "./top-common-basic-card.scss",
})
export class TopCommonBasicCard {
  public topCardData = commonTopCard;
}
