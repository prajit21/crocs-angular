import { Component, ChangeDetectionStrategy } from "@angular/core";

import { IconSiwtchSizing } from "../../../../../shared/data/forms-widgets/switch";

@Component({
  selector: "app-icons-switch",
  imports: [],
  templateUrl: "./icons-switch.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./icons-switch.scss",
})
export class IconsSwitch {
  public IconsizeingData = IconSiwtchSizing;
}
