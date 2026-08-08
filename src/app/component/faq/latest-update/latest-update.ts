import { Component, ChangeDetectionStrategy } from "@angular/core";

import { Feathericon } from "../../../shared/component/feathericon/feathericon";

@Component({
  selector: "app-latest-update",
  imports: [Feathericon],
  templateUrl: "./latest-update.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./latest-update.scss",
})
export class LatestUpdate {}
