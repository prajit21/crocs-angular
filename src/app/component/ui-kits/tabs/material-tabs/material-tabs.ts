import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { Description } from "./description/description";
import { Review } from "./review/review";
import { UserDetails } from "./user-details/user-details";

@Component({
  selector: "app-material-tabs",
  imports: [NgbModule, FormsModule, Description, Review, UserDetails],
  templateUrl: "./material-tabs.html",
  styleUrl: "./material-tabs.scss",
})
export class MaterialTabs {
  public active = 1;
}
