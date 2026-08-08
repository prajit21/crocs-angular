import {
  Component,
  TemplateRef,
  inject,
  ChangeDetectionStrategy,
} from "@angular/core";

import { NgbModal, NgbModalConfig } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-static-backdrop-modal",
  imports: [],
  templateUrl: "./static-backdrop-modal.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./static-backdrop-modal.scss",
})
export class StaticBackdropModal {
  private config = inject(NgbModalConfig);
  private modalService = inject(NgbModal);

  open(content: TemplateRef<NgbModal>) {
    this.modalService.open(content);
  }

  closeModal() {
    this.modalService.dismissAll();
  }
}
