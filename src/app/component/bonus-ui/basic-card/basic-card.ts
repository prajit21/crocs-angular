import { Component } from "@angular/core";

import { CommonInfoCard } from "./common-info-card/common-info-card";
import { DarkColorCard } from "./dark-color-card/dark-color-card";
import { TopCommonBasicCard } from "./top-common-basic-card/top-common-basic-card";
import { infoColorCards } from "../../../shared/data/bonus-ui/basic-card";

@Component({
  selector: "app-basic-card",
  imports: [TopCommonBasicCard, DarkColorCard, CommonInfoCard],
  templateUrl: "./basic-card.html",
  styleUrl: "./basic-card.scss",
})
export class BasicCard {
  public infoColorCards = infoColorCards;
}
