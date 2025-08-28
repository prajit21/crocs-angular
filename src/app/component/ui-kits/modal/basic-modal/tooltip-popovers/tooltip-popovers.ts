import { Component, inject } from "@angular/core";

import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-tooltip-popovers",
  imports: [],
  templateUrl: "./tooltip-popovers.html",
  styleUrl: "./tooltip-popovers.scss",
})
export class TooltipPopovers {
  private modal = inject(NgbActiveModal);

  closeModal() {
    this.modal.close();
  }
}
