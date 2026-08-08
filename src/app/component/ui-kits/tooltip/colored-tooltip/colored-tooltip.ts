import { Component, ChangeDetectionStrategy } from "@angular/core";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-colored-tooltip",
  imports: [NgbModule],
  templateUrl: "./colored-tooltip.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./colored-tooltip.scss",
})
export class ColoredTooltip {}
