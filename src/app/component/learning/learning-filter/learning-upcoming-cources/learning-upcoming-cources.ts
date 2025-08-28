import { Component, inject } from "@angular/core";

import { NgbModule, NgbRatingConfig } from "@ng-bootstrap/ng-bootstrap";

import { upcomingCourse } from "../../../../shared/data/learning/learning";

@Component({
  selector: "app-learning-upcoming-cources",
  imports: [NgbModule],
  templateUrl: "./learning-upcoming-cources.html",
  styleUrl: "./learning-upcoming-cources.scss",
})
export class LearningUpcomingCources {
  config = inject(NgbRatingConfig);

  public upcomingCourse = upcomingCourse;
  public isCollapsed = false;

  constructor() {
    const config = this.config;

    config.max = 5;
    config.readonly = true;
  }
}
