import { Component, inject } from "@angular/core";

import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

import { Feathericon } from "../../../../../shared/component/feathericon/feathericon";

@Component({
  selector: "app-fullscreen-xxl-modal",
  imports: [Feathericon],
  templateUrl: "./fullscreen-xxl-modal.html",
  styleUrl: "./fullscreen-xxl-modal.scss",
})
export class FullscreenXxlModal {
  private modal = inject(NgbActiveModal);

  closeModal() {
    this.modal.close();
  }
}
