import { Component } from "@angular/core";

import { BasicTooltip } from "./basic-tooltip/basic-tooltip";
import { ColoredTooltip } from "./colored-tooltip/colored-tooltip";
import { FilledTooltip } from "./filled-tooltip/filled-tooltip";
import { HtmlElementsHoverEffect } from "./html-elements-hover-effect/html-elements-hover-effect";
import { TooltipDirections } from "./tooltip-directions/tooltip-directions";

@Component({
  selector: "app-tooltip",
  imports: [
    BasicTooltip,
    ColoredTooltip,
    FilledTooltip,
    HtmlElementsHoverEffect,
    TooltipDirections,
  ],
  templateUrl: "./tooltip.html",
  styleUrl: "./tooltip.scss",
})
export class Tooltip {}
