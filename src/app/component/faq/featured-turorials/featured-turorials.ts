import { Component, inject, input } from "@angular/core";

import { NgbModule, NgbRatingConfig } from "@ng-bootstrap/ng-bootstrap";

import { featuredTutorial } from "../../../shared/data/faq/faq";

@Component({
  selector: "app-featured-turorials",
  imports: [NgbModule],
  templateUrl: "./featured-turorials.html",
  styleUrl: "./featured-turorials.scss",
})
export class FeaturedTurorials {
  config = inject(NgbRatingConfig);

  readonly data = input<featuredTutorial[]>();

  constructor() {
    const config = this.config;

    config.max = 5;
    config.readonly = true;
  }
}
