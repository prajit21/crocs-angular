import {
  Component,
  inject,
  input,
  ChangeDetectionStrategy,
} from "@angular/core";

import { LayoutService } from "../../services/layout.service";

@Component({
  selector: "app-svg-icon",
  imports: [],
  templateUrl: "./svg-icon.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./svg-icon.scss",
})
export class SvgIcon {
  layoutService = inject(LayoutService);

  public readonly icon = input<string>();
}
