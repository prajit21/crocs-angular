import { Component, ChangeDetectionStrategy } from "@angular/core";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-tooltip-directions",
  imports: [NgbModule],
  templateUrl: "./tooltip-directions.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./tooltip-directions.scss",
})
export class TooltipDirections {}
