import { Component, inject } from "@angular/core";

import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-tags-task",
  imports: [],
  templateUrl: "./tags-task.html",
  styleUrl: "./tags-task.scss",
})
export class TagsTask {
  private modal = inject(NgbActiveModal);

  closeModal() {
    this.modal.close();
  }
}
