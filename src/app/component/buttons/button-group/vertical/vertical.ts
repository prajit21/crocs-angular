import { Component, ChangeDetectionStrategy } from "@angular/core";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-vertical",
  imports: [NgbModule],
  templateUrl: "./vertical.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./vertical.scss",
})
export class Vertical {}
