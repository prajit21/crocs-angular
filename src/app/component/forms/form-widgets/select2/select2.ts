import { Component } from "@angular/core";

import { DefaultSelect2 } from "./default-select2/default-select2";
import { FullColoredVariant } from "./full-colored-variant/full-colored-variant";
import { OutlineColorVariant } from "./outline-color-variant/outline-color-variant";

@Component({
  selector: "app-select2",
  imports: [DefaultSelect2, FullColoredVariant, OutlineColorVariant],
  templateUrl: "./select2.html",
  styleUrl: "./select2.scss",
})
export class Select2 {}
