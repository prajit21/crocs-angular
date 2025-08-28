import { Component } from "@angular/core";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import * as Data from "../../../../shared/data/ui-kits/dropdown";

@Component({
  selector: "app-helper-card",
  imports: [NgbModule],
  templateUrl: "./helper-card.html",
  styleUrl: "./helper-card.scss",
})
export class HelperCard {
  public helpercardData = Data.HelperCard;
}
