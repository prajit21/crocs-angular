import { Component, ChangeDetectionStrategy } from "@angular/core";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-nesting",
  imports: [NgbModule],
  templateUrl: "./nesting.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./nesting.scss",
})
export class Nesting {}
