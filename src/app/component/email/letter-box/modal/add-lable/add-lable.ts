import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";

import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-add-lable",
  imports: [CommonModule],
  templateUrl: "./add-lable.html",
  styleUrl: "./add-lable.scss",
})
export class AddLable {
  private modal = inject(NgbActiveModal);

  closeModal() {
    this.modal.close();
  }
}
