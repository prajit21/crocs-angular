import { Component, inject } from "@angular/core";

import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

import { Feathericon } from "../../../../../shared/component/feathericon/feathericon";
import { ModalData } from "../../../../../shared/data/ui-kits/modal";

@Component({
  selector: "app-fullscreen-simple-modal",
  imports: [Feathericon],
  templateUrl: "./fullscreen-simple-modal.html",
  styleUrl: "./fullscreen-simple-modal.scss",
})
export class FullscreenSimpleModal {
  private modal = inject(NgbActiveModal);

  public FullscreenData = ModalData;

  closeModal() {
    this.modal.close();
  }
}
