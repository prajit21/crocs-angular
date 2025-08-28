import { Component } from "@angular/core";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-simple-tabs",
  imports: [NgbModule],
  templateUrl: "./simple-tabs.html",
  styleUrl: "./simple-tabs.scss",
})
export class SimpleTabs {
  public active = 2;
}
