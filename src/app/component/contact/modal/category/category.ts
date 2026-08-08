import { Component, inject, ChangeDetectionStrategy } from "@angular/core";

import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-category",
  imports: [],
  templateUrl: "./category.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./category.scss",
})
export class Category {
  private modal = inject(NgbActiveModal);

  closeModal() {
    this.modal.close();
  }
}
