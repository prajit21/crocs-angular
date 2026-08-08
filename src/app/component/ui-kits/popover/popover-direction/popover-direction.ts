import { Component, ChangeDetectionStrategy } from "@angular/core";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-popover-direction",
  imports: [NgbModule],
  templateUrl: "./popover-direction.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./popover-direction.scss",
})
export class PopoverDirection {}
