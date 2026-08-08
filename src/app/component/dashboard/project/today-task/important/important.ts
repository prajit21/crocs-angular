import { Component, ChangeDetectionStrategy } from "@angular/core";

import {
  projectTask,
  task,
} from "../../../../../shared/data/dashboard/project/project";

@Component({
  selector: "app-important",
  imports: [],
  templateUrl: "./important.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./important.scss",
})
export class Important {
  public projectTaskData = projectTask;

  close(data: task) {
    this.projectTaskData.splice(this.projectTaskData.indexOf(data), 1);
  }
}
