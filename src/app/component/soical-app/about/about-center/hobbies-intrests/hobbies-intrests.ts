import { CommonModule } from "@angular/common";
import { Component, input } from "@angular/core";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import * as data from "../../../../../shared/data/social-media/social-media-data";

@Component({
  selector: "app-hobbies-intrests",
  imports: [CommonModule, NgbModule],
  templateUrl: "./hobbies-intrests.html",
  styleUrl: "./hobbies-intrests.scss",
})
export class HobbiesIntrests {
  readonly data = input<data.hobbiesEduction>();
}
