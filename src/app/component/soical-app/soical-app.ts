import { Component, ChangeDetectionStrategy } from "@angular/core";

import { SoicalProfile } from "./soical-profile/soical-profile";

@Component({
  selector: "app-soical-app",
  imports: [SoicalProfile],
  templateUrl: "./soical-app.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./soical-app.scss",
})
export class SoicalApp {}
