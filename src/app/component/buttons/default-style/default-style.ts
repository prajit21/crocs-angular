import { Component } from "@angular/core";

import { DefaultButtons } from "../../../shared/data/buttons/default-style";

@Component({
  selector: "app-default-style",
  imports: [],
  templateUrl: "./default-style.html",
  styleUrl: "./default-style.scss",
})
export class DefaultStyle {
  public defaultstyleData = DefaultButtons;
}
