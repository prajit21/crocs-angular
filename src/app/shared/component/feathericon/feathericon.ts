import { Component, input } from "@angular/core";

import * as feather from "feather-icons";

@Component({
  selector: "app-feathericon",
  imports: [],
  templateUrl: "./feathericon.html",
  styleUrl: "./feathericon.scss",
})
export class Feathericon {
  public readonly icon = input<string>();

  ngAfterViewInit() {
    feather.replace();
  }
}
