import { TitleCasePipe } from "@angular/common";
import { Component, ChangeDetectionStrategy } from "@angular/core";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-full-colored-variant",
  imports: [NgbModule, TitleCasePipe],
  templateUrl: "./full-colored-variant.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./full-colored-variant.scss",
})
export class FullColoredVariant {
  colors = [
    "primary",
    "secondary",
    "success",
    "info",
    "warning",
    "danger",
    "inverse",
  ];
}
