import { Component, ChangeDetectionStrategy } from "@angular/core";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-profile-intro",
  imports: [NgbModule],
  templateUrl: "./profile-intro.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./profile-intro.scss",
})
export class ProfileIntro {}
