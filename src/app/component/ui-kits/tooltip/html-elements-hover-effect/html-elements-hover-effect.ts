import { Component, ChangeDetectionStrategy } from "@angular/core";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-html-elements-hover-effect",
  imports: [NgbModule],
  templateUrl: "./html-elements-hover-effect.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./html-elements-hover-effect.scss",
})
export class HtmlElementsHoverEffect {}
