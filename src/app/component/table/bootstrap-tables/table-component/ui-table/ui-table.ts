import { Component, ChangeDetectionStrategy } from "@angular/core";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-ui-table",
  imports: [NgbModule],
  templateUrl: "./ui-table.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./ui-table.scss",
})
export class UiTable {}
