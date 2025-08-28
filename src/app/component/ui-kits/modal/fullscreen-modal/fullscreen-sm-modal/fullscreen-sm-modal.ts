import { Component, inject } from "@angular/core";

import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

import { Feathericon } from "../../../../../shared/component/feathericon/feathericon";

@Component({
  selector: "app-fullscreen-sm-modal",
  imports: [Feathericon],
  templateUrl: "./fullscreen-sm-modal.html",
  styleUrl: "./fullscreen-sm-modal.scss",
})
export class FullscreenSmModal {
  private modal = inject(NgbActiveModal);

  closeModal() {
    this.modal.close();
  }
}
