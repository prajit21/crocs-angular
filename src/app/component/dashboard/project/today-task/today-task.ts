import { NgClass } from "@angular/common";
import { Component, ChangeDetectionStrategy } from "@angular/core";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AllTask } from "./all-task/all-task";
import { Important } from "./important/important";
import { Links } from "./links/links";
import { Notes } from "./notes/notes";
import { ClickOutsideDirective } from "../../../../shared/directive/outside.directive";

@Component({
  selector: "app-today-task",
  imports: [
    AllTask,
    Links,
    Important,
    Notes,
    NgbModule,
    ClickOutsideDirective,
    NgClass,
  ],
  templateUrl: "./today-task.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./today-task.scss",
})
export class TodayTask {
  public active = 1;
  public openTab: string = "all";
  public isOpen: boolean = false;

  constructor() {}

  public tabbed(val: string) {
    this.openTab = val;
  }

  open() {
    this.isOpen = !this.isOpen;
  }

  clickOutside(): void {
    this.isOpen = false;
  }
}
