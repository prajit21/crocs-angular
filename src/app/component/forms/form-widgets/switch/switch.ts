import { Component } from "@angular/core";

import { CommonSwitch } from "./common-switch/common-switch";
import { CustomSwitch } from "./custom-switch/custom-switch";
import { DisabledSwitch } from "./disabled-switch/disabled-switch";
import { IconsSwitch } from "./icons-switch/icons-switch";
import { SwitchSizing } from "./switch-sizing/switch-sizing";
import { VariationSwitches } from "./variation-switches/variation-switches";

@Component({
  selector: "app-switch",
  imports: [
    CustomSwitch,
    CommonSwitch,
    DisabledSwitch,
    IconsSwitch,
    SwitchSizing,
    VariationSwitches,
  ],
  templateUrl: "./switch.html",
  styleUrl: "./switch.scss",
})
export class Switch {}
