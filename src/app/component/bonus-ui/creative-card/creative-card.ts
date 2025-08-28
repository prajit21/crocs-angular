import { Component } from "@angular/core";

import { BorderPrimaryState } from "./border-primary-state/border-primary-state";
import { BorderSecondaryState } from "./border-secondary-state/border-secondary-state";
import { BorderWarningState } from "./border-warning-state/border-warning-state";
import { CommonAbsoluteCard } from "./common-absolute-card/common-absolute-card";
import { CommonBorderCard } from "./common-border-card/common-border-card";

@Component({
  selector: "app-creative-card",
  imports: [
    CommonBorderCard,
    CommonAbsoluteCard,
    BorderSecondaryState,
    BorderWarningState,
    BorderPrimaryState,
  ],
  templateUrl: "./creative-card.html",
  styleUrl: "./creative-card.scss",
})
export class CreativeCard {}
