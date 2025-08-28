import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-javscript-behavior",
  imports: [NgbModule, CommonModule],
  templateUrl: "./javscript-behavior.html",
  styleUrl: "./javscript-behavior.scss",
})
export class JavscriptBehavior {
  public active = 1;
}
