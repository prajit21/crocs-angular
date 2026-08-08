import { Component, inject, ChangeDetectionStrategy } from "@angular/core";

import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-tooltip-popovers",
  imports: [],
  templateUrl: "./tooltip-popovers.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./tooltip-popovers.scss",
})
export class TooltipPopovers {
  private modal = inject(NgbActiveModal);

  closeModal() {
    this.modal.close();
  }
}
