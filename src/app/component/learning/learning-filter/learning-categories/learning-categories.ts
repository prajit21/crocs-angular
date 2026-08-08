import { Component, ChangeDetectionStrategy } from "@angular/core";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { Categories } from "../../../../shared/data/learning/learning";

@Component({
  selector: "app-learning-categories",
  imports: [NgbModule],
  templateUrl: "./learning-categories.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./learning-categories.scss",
})
export class LearningCategories {
  public Categories = Categories;
  public isCollapsed = false;
}
