import { Component } from "@angular/core";

import { LearningCategories } from "./learning-categories/learning-categories";
import { LearningFindCources } from "./learning-find-cources/learning-find-cources";
import { LearningUpcomingCources } from "./learning-upcoming-cources/learning-upcoming-cources";
import { findCourse } from "../../../shared/data/learning/learning";
import { ClickOutsideDirective } from "../../../shared/directive/outside.directive";

@Component({
  selector: "app-learning-filter",
  imports: [
    LearningCategories,
    LearningUpcomingCources,
    LearningFindCources,
    ClickOutsideDirective,
  ],
  templateUrl: "./learning-filter.html",
  styleUrl: "./learning-filter.scss",
})
export class LearningFilter {
  public findCourse = findCourse;
  public isCollapsed: boolean = false;

  openFilter() {
    this.isCollapsed = !this.isCollapsed;
  }

  clickOutside(): void {
    this.isCollapsed = false;
  }
}
