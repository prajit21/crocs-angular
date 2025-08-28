import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";

import { NgbModule, NgbRatingConfig } from "@ng-bootstrap/ng-bootstrap";

import { jobCardsData } from "../../../shared/data/job-search/job-search";
import { JobFilter } from "../job-filter/job-filter";

@Component({
  selector: "app-list-view",
  imports: [JobFilter, NgbModule, CommonModule],
  templateUrl: "./list-view.html",
  styleUrl: "./list-view.scss",
})
export class ListView {
  config = inject(NgbRatingConfig);

  public jobCardsData = jobCardsData;
  public rating = 5;

  constructor() {
    const config = this.config;

    config.max = 5;
    config.readonly = true;
  }
}
