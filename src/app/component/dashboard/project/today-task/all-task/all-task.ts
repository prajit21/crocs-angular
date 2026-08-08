import { Component, ChangeDetectionStrategy } from "@angular/core";

import {
  projectTask,
  task,
} from "../../../../../shared/data/dashboard/project/project";

@Component({
  selector: "app-all-task",
  imports: [],
  templateUrl: "./all-task.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./all-task.scss",
})
export class AllTask {
  public projectTaskData = projectTask;

  close(data: task) {
    this.projectTaskData.splice(this.projectTaskData.indexOf(data), 1);
  }
}
