import { Component, ChangeDetectionStrategy } from "@angular/core";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-browser-defaults",
  imports: [NgbModule],
  templateUrl: "./browser-defaults.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./browser-defaults.scss",
})
export class BrowserDefaults {}
