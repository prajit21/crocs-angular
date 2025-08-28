import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-outline-color-variant",
  imports: [CommonModule, NgbModule],
  templateUrl: "./outline-color-variant.html",
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
