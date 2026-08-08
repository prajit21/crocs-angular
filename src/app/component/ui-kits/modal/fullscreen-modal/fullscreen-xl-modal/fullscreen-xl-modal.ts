import { Component, inject, ChangeDetectionStrategy } from "@angular/core";

import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

import { Feathericon } from "../../../../../shared/component/feathericon/feathericon";

@Component({
  selector: "app-fullscreen-xl-modal",
  imports: [Feathericon],
  templateUrl: "./fullscreen-xl-modal.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./fullscreen-xl-modal.scss",
})
export class FullscreenXlModal {
  private modal = inject(NgbActiveModal);

  closeModal() {
    this.modal.close();
  }
}
