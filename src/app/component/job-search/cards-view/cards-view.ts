import { Component, inject } from "@angular/core";

import { NgbModule, NgbRatingConfig } from "@ng-bootstrap/ng-bootstrap";

import { jobCardsData } from "../../../shared/data/job-search/job-search";
import { JobFilter } from "../job-filter/job-filter";

@Component({
  selector: "app-cards-view",
  imports: [JobFilter, NgbModule],
  templateUrl: "./cards-view.html",
  styleUrl: "./cards-view.scss",
})
export class CardsView {
  config = inject(NgbRatingConfig);

  public jobCardsData = jobCardsData;

  constructor() {
    const config = this.config;

    config.max = 5;
    config.readonly = true;
  }
}
