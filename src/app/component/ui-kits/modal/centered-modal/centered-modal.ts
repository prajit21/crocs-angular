import {
  Component,
  TemplateRef,
  inject,
  ChangeDetectionStrategy,
} from "@angular/core";

import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-centered-modal",
  imports: [],
  templateUrl: "./centered-modal.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./centered-modal.scss",
})
export class CenteredModal {
  private modal = inject(NgbModal);

  openModal(value: TemplateRef<NgbModal>) {
    this.modal.open(value, { centered: true });
  }

  closeModal() {
    this.modal.dismissAll();
  }
}
