import { Component, ChangeDetectionStrategy } from "@angular/core";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-basic-popover",
  imports: [NgbModule],
  templateUrl: "./basic-popover.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./basic-popover.scss",
})
export class BasicPopover {}
