import { Component, ChangeDetectionStrategy } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-pills-tabs",
  imports: [NgbModule, FormsModule],
  templateUrl: "./pills-tabs.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./pills-tabs.scss",
})
export class PillsTabs {
  public active = 3;
}
