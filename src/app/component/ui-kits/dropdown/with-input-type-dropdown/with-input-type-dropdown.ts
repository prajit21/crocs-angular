import { Component, ChangeDetectionStrategy } from "@angular/core";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-with-input-type-dropdown",
  imports: [NgbModule],
  templateUrl: "./with-input-type-dropdown.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./with-input-type-dropdown.scss",
})
export class WithInputTypeDropdown {}
