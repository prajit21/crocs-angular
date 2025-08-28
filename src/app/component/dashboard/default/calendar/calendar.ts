import { Component, inject } from "@angular/core";

import { NgbCalendar, NgbDatepickerModule } from "@ng-bootstrap/ng-bootstrap";

import { ClickOutsideDirective } from "../../../../shared/directive/outside.directive";

@Component({
  selector: "app-calendar",
  imports: [NgbDatepickerModule, ClickOutsideDirective],
  templateUrl: "./calendar.html",
  styleUrl: "./calendar.scss",
})
export class Calendar {
  private calendar = inject(NgbCalendar);

  public date: { year: number; month: number };
  public isOpen: boolean = false;
}
