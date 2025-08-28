import { Component, inject, input } from "@angular/core";

import { LayoutService } from "../../services/layout.service";

@Component({
  selector: "app-svg-icon",
  imports: [],
  templateUrl: "./svg-icon.html",
  styleUrl: "./svg-icon.scss",
})
export class SvgIcon {
  layoutService = inject(LayoutService);

  public readonly icon = input<string>();
}
