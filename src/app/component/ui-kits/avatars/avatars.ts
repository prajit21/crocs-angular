import { Component } from "@angular/core";

import { AvatarsSizes } from "./avatars-sizes/avatars-sizes";
import { Grouping } from "./grouping/grouping";
import { Ratio } from "./ratio/ratio";
import { Shapes } from "./shapes/shapes";
import { StatusIndicator } from "./status-indicator/status-indicator";

@Component({
  selector: "app-avatars",
  imports: [AvatarsSizes, Grouping, Ratio, StatusIndicator, Shapes],
  templateUrl: "./avatars.html",
  styleUrl: "./avatars.scss",
})
export class Avatars {}
