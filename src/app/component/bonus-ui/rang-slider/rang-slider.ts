import { Component } from "@angular/core";

import { CustomValues } from "./custom-values/custom-values";
import { DefaultRangSlider } from "./default-rang-slider/default-rang-slider";
import { Disabled } from "./disabled/disabled";
import { MinMaxSlider } from "./min-max-slider/min-max-slider";
import { PrettifyNumber } from "./prettify-number/prettify-number";

@Component({
  selector: "app-rang-slider",
  imports: [
    CustomValues,
    DefaultRangSlider,
    Disabled,
    PrettifyNumber,
    MinMaxSlider,
  ],
  templateUrl: "./rang-slider.html",
  styleUrl: "./rang-slider.scss",
})
export class RangSlider {}
