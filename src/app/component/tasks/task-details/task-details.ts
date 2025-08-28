import { Component, input } from "@angular/core";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { Feathericon } from "../../../shared/component/feathericon/feathericon";
import { tasks } from "../../../shared/data/tasks/task";
import { task, taskDetails } from "../../../shared/interface/task";

@Component({
  selector: "app-task-details",
  imports: [NgbModule, Feathericon],
  templateUrl: "./task-details.html",
  styleUrl: "./task-details.scss",
})
export class TaskDetails {
  readonly activeTab = input<string>();

  public tasks = tasks;
  public taskData: task;
  public taskDetails: taskDetails[];

  ngOnChanges() {
    this.tasks.filter((data) => {
      if (data.value == this.activeTab()) {
        this.taskDetails = data.data;
        this.taskData = data;
      }
    });
  }

  remove(index: number, title: string) {
    this.tasks.filter((data) => {
      if (data.id == this.taskData.id) {
        data.data.forEach((element) => {
          if (this.tasks) {
            if (element.title == title) {
              data.data.splice(index, 1);
            }
          }
        });
      }
    });
  }
}
