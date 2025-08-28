import { Component, TemplateRef, inject } from "@angular/core";
import { RouterModule } from "@angular/router";

import { NgbModal, NgbModalRef } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-toggle-between-modals",
  imports: [RouterModule],
  templateUrl: "./toggle-between-modals.html",
  styleUrl: "./toggle-between-modals.scss",
})
export class ToggleBetweenModals {
  private modal = inject(NgbModal);

  public modal1: NgbModalRef;

  openModal(value: string, content: TemplateRef<NgbModal>) {
    if (value == "first") {
      this.modal1 = this.modal.open(content, { centered: true });
    } else if (value == "second") {
      this.modal.dismissAll(this.modal1);
      this.modal.open(content, { centered: true });
    }
  }

  closeModal() {
    this.modal.dismissAll();
  }
}
