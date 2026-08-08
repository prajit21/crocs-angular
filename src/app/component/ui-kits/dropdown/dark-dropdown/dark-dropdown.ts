import { Component, ChangeDetectionStrategy } from "@angular/core";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-dark-dropdown",
  imports: [NgbModule],
  templateUrl: "./dark-dropdown.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./dark-dropdown.scss",
})
export class DarkDropdown {}
