import { Component, ChangeDetectionStrategy } from "@angular/core";

import { BootstrapCalendar } from "./bootstrap-calendar/bootstrap-calendar";
import { DefaultCalendar } from "./default-calendar/default-calendar";

@Component({
  selector: "app-datepicker",
  imports: [DefaultCalendar, BootstrapCalendar],
  templateUrl: "./datepicker.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./datepicker.scss",
})
export class Datepicker {}
