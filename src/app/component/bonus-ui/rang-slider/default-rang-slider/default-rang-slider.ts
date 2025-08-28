import { Component } from "@angular/core";

import { NgxSliderModule, Options } from "@angular-slider/ngx-slider";

@Component({
  selector: "app-default-rang-slider",
  imports: [NgxSliderModule],
  templateUrl: "./default-rang-slider.html",
  styleUrl: "./default-rang-slider.scss",
})
export class DefaultRangSlider {
  public value: number = 550;

  options: Options = {
    floor: 100,
    ceil: 1000,
  };
}
