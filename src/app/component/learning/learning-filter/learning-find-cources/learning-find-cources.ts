import { Component } from "@angular/core";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { Feathericon } from "../../../../shared/component/feathericon/feathericon";
import { findCourse } from "../../../../shared/data/learning/learning";

@Component({
  selector: "app-learning-find-cources",
  imports: [NgbModule, Feathericon],
  templateUrl: "./learning-find-cources.html",
  styleUrl: "./learning-find-cources.scss",
})
export class LearningFindCources {
  public findCourse = findCourse;
  public isCollapsed = false;
}
