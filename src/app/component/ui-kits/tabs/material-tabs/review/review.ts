import { Component } from "@angular/core";

import { reviewData } from "../../../../../shared/data/ui-kits/tab";

@Component({
  selector: "app-review",
  imports: [],
  templateUrl: "./review.html",
  styleUrl: "./review.scss",
})
export class Review {
  public reviewData = reviewData;
}
