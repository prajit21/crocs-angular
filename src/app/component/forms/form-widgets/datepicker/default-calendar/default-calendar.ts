import { Component, ChangeDetectionStrategy } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { NgbDateStruct, NgbModule } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-default-calendar",
  imports: [NgbModule, FormsModule],
  templateUrl: "./default-calendar.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./default-calendar.scss",
})
export class DefaultCalendar {
  model: NgbDateStruct;
  date: { year: number; month: number };
}
