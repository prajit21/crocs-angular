import { Component, ChangeDetectionStrategy } from "@angular/core";

import { commentsData } from "../../../shared/data/learning/learning";
import { BlogComment } from "../../blog/blog-single/blog-comment/blog-comment";
import { LearningFilter } from "../learning-filter/learning-filter";

@Component({
  selector: "app-detailed-course",
  imports: [LearningFilter, BlogComment],
  templateUrl: "./detailed-course.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./detailed-course.scss",
})
export class DetailedCourse {
  public commentsData = commentsData;
}
