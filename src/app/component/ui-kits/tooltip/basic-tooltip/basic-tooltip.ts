import { Component, ChangeDetectionStrategy } from "@angular/core";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-basic-tooltip",
  imports: [NgbModule],
  templateUrl: "./basic-tooltip.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./basic-tooltip.scss",
})
export class BasicTooltip {}
