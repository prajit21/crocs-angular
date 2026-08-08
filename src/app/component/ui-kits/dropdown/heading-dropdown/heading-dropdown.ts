import { Component, ChangeDetectionStrategy } from "@angular/core";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-heading-dropdown",
  imports: [NgbModule],
  templateUrl: "./heading-dropdown.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./heading-dropdown.scss",
})
export class HeadingDropdown {}
