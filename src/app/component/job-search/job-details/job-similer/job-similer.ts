import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";

import { NgbModule, NgbRatingConfig } from "@ng-bootstrap/ng-bootstrap";

import { jobCardsData } from "../../../../shared/data/job-search/job-search";

@Component({
  selector: "app-job-similer",
  imports: [NgbModule, CommonModule],
  templateUrl: "./job-similer.html",
  styleUrl: "./job-similer.scss",
})
export class JobSimiler {
  config = inject(NgbRatingConfig);

  public jobCardsData = jobCardsData;

  constructor() {
    const config = this.config;

    config.max = 5;
    config.readonly = true;
  }
}
