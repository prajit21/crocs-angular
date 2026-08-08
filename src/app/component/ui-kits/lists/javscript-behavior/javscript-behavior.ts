import { Component, ChangeDetectionStrategy } from "@angular/core";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-javscript-behavior",
  imports: [NgbModule],
  templateUrl: "./javscript-behavior.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./javscript-behavior.scss",
})
export class JavscriptBehavior {
  public active = 1;
}
