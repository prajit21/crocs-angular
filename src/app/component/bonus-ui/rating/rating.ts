import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { BarRatingModule } from "ngx-bar-rating";

import { CurrentRatingbar } from "./current-ratingbar/current-ratingbar";

@Component({
  selector: "app-rating",
  imports: [BarRatingModule, FormsModule, NgbModule, CurrentRatingbar],
  templateUrl: "./rating.html",
  styleUrl: "./rating.scss",
})
export class Rating {
  public faRate = 7;
  public movieRate = 2;
  public squareRate = 1;
  public cssRate = 1;
  public HorizontalRate = 1;
}
