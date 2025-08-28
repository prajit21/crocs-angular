import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { TaskDetails } from "./task-details/task-details";
import { TaskSidemenu } from "./task-sidemenu/task-sidemenu";

@Component({
  selector: "app-tasks",
  imports: [
    CommonModule,
    TaskSidemenu,
    TaskDetails,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: "./tasks.html",
  styleUrl: "./tasks.scss",
})
export class Tasks {
  public activeTab: string;

  tabValue(value: string) {
    this.activeTab = value;
  }
}
