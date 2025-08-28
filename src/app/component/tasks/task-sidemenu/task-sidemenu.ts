import { Component, inject, output } from "@angular/core";

import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

import { Feathericon } from "../../../shared/component/feathericon/feathericon";
import { tasks } from "../../../shared/data/tasks/task";
import { ClickOutsideDirective } from "../../../shared/directive/outside.directive";
import { NewTask } from "../modal/new-task/new-task";
import { TagsTask } from "../modal/tags-task/tags-task";

@Component({
  selector: "app-task-sidemenu",
  imports: [Feathericon, ClickOutsideDirective],
  templateUrl: "./task-sidemenu.html",
  styleUrl: "./task-sidemenu.scss",
})
export class TaskSidemenu {
  private modal = inject(NgbModal);

  readonly tabValue = output<string>();

  public tasks = tasks;

  public activeTab: string = "created_by_me";
  public isOpen: boolean = false;

  ngOnInit() {
    this.tabValue.emit(this.activeTab);
  }

  openFilter() {
    this.isOpen = !this.isOpen;
  }

  clickOutside(): void {
    this.isOpen = false;
  }

  changeTab(value: string) {
    this.activeTab = value;
    this.tabValue.emit(this.activeTab);
  }

  openModal(value: string) {
    if (value == "task") {
      this.modal.open(NewTask, { size: "lg", windowClass: "modal-bookmark" });
    } else if (value == "tag") {
      this.modal.open(TagsTask, { size: "lg", windowClass: "modal-bookmark" });
    }
  }
}
