import { Component, ChangeDetectionStrategy } from "@angular/core";

import { DateFormat } from "./date-format/date-format";
import { DefaultFormat } from "./default-format/default-format";
import { TimeFormat } from "./time-format/time-format";

@Component({
  selector: "app-input-mask",
  imports: [DateFormat, TimeFormat, DefaultFormat],
  templateUrl: "./input-mask.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./input-mask.scss",
})
export class InputMask {}
