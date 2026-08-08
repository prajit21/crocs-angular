import { Component, ChangeDetectionStrategy } from "@angular/core";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-popover-offset",
  imports: [NgbModule],
  templateUrl: "./popover-offset.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./popover-offset.scss",
})
export class PopoverOffset {}
