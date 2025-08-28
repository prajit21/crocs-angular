import { Component } from "@angular/core";

import {
  projectTask,
  task,
} from "../../../../../shared/data/dashboard/project/project";

@Component({
  selector: "app-links",
  imports: [],
  templateUrl: "./links.html",
  styleUrl: "./links.scss",
})
export class Links {
  public projectTaskData = projectTask;

  close(data: task) {
    this.projectTaskData.splice(this.projectTaskData.indexOf(data), 1);
  }
}
