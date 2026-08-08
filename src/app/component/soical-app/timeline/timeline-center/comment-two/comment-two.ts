import { Component, ChangeDetectionStrategy } from "@angular/core";

import { Feathericon } from "../../../../../shared/component/feathericon/feathericon";

@Component({
  selector: "app-comment-two",
  imports: [Feathericon],
  templateUrl: "./comment-two.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./comment-two.scss",
})
export class CommentTwo {}
