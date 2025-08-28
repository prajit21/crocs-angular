import { Component, inject } from "@angular/core";

import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

import { Feathericon } from "../../../../../shared/component/feathericon/feathericon";

@Component({
  selector: "app-fullscreen-md-modal",
  imports: [Feathericon],
  templateUrl: "./fullscreen-md-modal.html",
  styleUrl: "./fullscreen-md-modal.scss",
})
export class FullscreenMdModal {
  private modal = inject(NgbActiveModal);

  closeModal() {
    this.modal.close();
  }
}
