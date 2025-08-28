import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

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
    CommonModule,
    ClickOutsideDirective,
  ],
  templateUrl: "./today-task.html",
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
