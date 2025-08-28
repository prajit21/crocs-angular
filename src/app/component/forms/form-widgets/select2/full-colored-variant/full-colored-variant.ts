import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-full-colored-variant",
  imports: [CommonModule, NgbModule],
  templateUrl: "./full-colored-variant.html",
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
