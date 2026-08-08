import { Component, ChangeDetectionStrategy } from "@angular/core";

import { Feathericon } from "../../../../shared/component/feathericon/feathericon";

@Component({
  selector: "app-badges-part-buttons",
  imports: [Feathericon],
  templateUrl: "./badges-part-buttons.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./badges-part-buttons.scss",
})
export class BadgesPartButtons {}
