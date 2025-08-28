import { Component } from "@angular/core";

import {
  projectTask,
  task,
} from "../../../../../shared/data/dashboard/project/project";

@Component({
  selector: "app-notes",
  imports: [],
  templateUrl: "./notes.html",
  styleUrl: "./notes.scss",
})
export class Notes {
  public projectTaskData = projectTask;

  close(data: task) {
    this.projectTaskData.splice(this.projectTaskData.indexOf(data), 1);
  }
}
