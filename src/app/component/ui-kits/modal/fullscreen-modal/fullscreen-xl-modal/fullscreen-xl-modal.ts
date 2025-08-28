import { Component, inject } from "@angular/core";

import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

import { Feathericon } from "../../../../../shared/component/feathericon/feathericon";

@Component({
  selector: "app-fullscreen-xl-modal",
  imports: [Feathericon],
  templateUrl: "./fullscreen-xl-modal.html",
  styleUrl: "./fullscreen-xl-modal.scss",
})
export class FullscreenXlModal {
  private modal = inject(NgbActiveModal);

  closeModal() {
    this.modal.close();
  }
}
