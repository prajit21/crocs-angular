import { Component, ChangeDetectionStrategy } from "@angular/core";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-unique-dropdown",
  imports: [NgbModule],
  templateUrl: "./unique-dropdown.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./unique-dropdown.scss",
})
export class UniqueDropdown {}
