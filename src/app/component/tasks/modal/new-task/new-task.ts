import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";

import { NgbActiveModal, NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { tasks } from "../../../../shared/data/tasks/task";
import { task, taskDetails } from "../../../../shared/interface/task";

@Component({
  selector: "app-new-task",
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NgbModule],
  templateUrl: "./new-task.html",
  styleUrl: "./new-task.scss",
})
export class NewTask {
  private modal = inject(NgbActiveModal);

  public validate: boolean = false;
  public Tasks: task[] = tasks;
  public ids: number[] = [];
  public maxId: number;
  public todayDate = new Date().toLocaleDateString();

  public myForm = new FormGroup({
    title: new FormControl("", Validators.required),
    date: new FormControl("", Validators.required),
    subtitle: new FormControl("General"),
    time: new FormControl("7:00", Validators.required),
    description: new FormControl("", Validators.required),
    id: new FormControl(0),
  });

  constructor() {
    this.Tasks.forEach((data) => {
      data.data?.forEach((subData) => {
        if (data.value == "created_by_me") {
          this.ids.push(subData.id);
          this.maxId = Math.max(...this.ids);
        }
      });
    });

    this.myForm = new FormGroup({
      title: new FormControl("", Validators.required),
      subtitle: new FormControl("General", Validators.required),
      date: new FormControl("", Validators.required),
      time: new FormControl("7:00", Validators.required),
      description: new FormControl("", Validators.required),
      id: new FormControl(this.maxId + 1),
    });
  }

  addTask() {
    this.validate = true;
    if (this.myForm.valid) {
      const taskData = this.myForm.value as taskDetails;
      this.Tasks.forEach((data) => {
        if (data.value == "created_by_me") {
          data.data.push(taskData);
        }
      });
      this.modal.close();
    }
  }

  closeModal() {
    this.modal.close();
  }

  get title() {
    return this.myForm.get("title");
  }

  get subTask() {
    return this.myForm.get("subTask");
  }

  get subtitle() {
    return this.myForm.get("subtitle");
  }

  get date() {
    return this.myForm.get("date");
  }

  get time() {
    return this.myForm.get("time");
  }

  get description() {
    return this.myForm.get("description");
  }
}
