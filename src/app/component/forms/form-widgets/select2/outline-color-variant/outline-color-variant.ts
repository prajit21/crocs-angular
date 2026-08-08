import { TitleCasePipe } from "@angular/common";
import { Component, ChangeDetectionStrategy } from "@angular/core";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-outline-color-variant",
  imports: [NgbModule, TitleCasePipe],
  templateUrl: "./outline-color-variant.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./outline-color-variant.scss",
})
export class OutlineColorVariant {
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
