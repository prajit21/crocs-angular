import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-material-left-tabs",
  imports: [NgbModule, FormsModule],
  templateUrl: "./material-left-tabs.html",
  styleUrl: "./material-left-tabs.scss",
})
export class MaterialLeftTabs {
  public active = 1;
}
